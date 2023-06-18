# With filters view

## Component Description

This view is a UI component which contains a left panel with filters (LPF) and a right panel view (RPV).
The LPF is 1/5 of the screen, while RPV is 4/5.

Example:

![panels](panels.png)

While the component is render, it must support 3 modes:
  1. Loading mode.
  2. Grouping mode.
  3. Items mode.

### Loading mode

Display a loading spinner animation on the center of the screen and hide LPF and RPV while the view is waiting for the data from the backend.

### Grouping mode

When the data from the backend is completely received, switch to this mode.
During grouping mode, the LPF should show filters for the items fields:
  - name
  - cut
  - color

Example:

![img](filters.png)

For the RVP, during grouping mode, use the `items` field from the backend response, which contains the total array of items to create a new structure to group items by name. For example:

For a sample `items` response like:

```json
{
    "items": [
        {
            "_id": "64727f32eac5b8f678e69993",
            "code": "AMT-021",
            "price": 80,
            "weight": 0,
            "color": "Foo",
            "width": 0,
            "length": 4,
            "cut": "Foo",
            "qty": 19,
            "name": "Foo"
        },
        {
            "_id": "64727f32621f704b22ca7b03",
            "code": "AMT-004",
            "price": 50,
            "weight": 0,
            "color": "Bar",
            "width": 0,
            "length": 3,
            "cut": "Bar",
            "qty": 47,
            "name": "Bar"
        },
        {
            "_id": "64727f32bce37f442005d3ee",
            "code": "AMT-018",
            "price": 180,
            "weight": 0,
            "color": "Bar",
            "width": 0,
            "length": 6,
            "cut": "Bar",
            "qty": 8,
            "name": "Bar"
        }
    ]
}
```

Create a new object like:

```json
{
    "Foo": [
        {
            "_id": "64727f32eac5b8f678e69993",
            "code": "AMT-021",
            "price": 80,
            "weight": 0,
            "color": "Foo",
            "width": 0,
            "length": 4,
            "cut": "FooCut",
            "qty": 19,
            "name": "Foo"
        }
    ],
    "Bar": [
        {
            "_id": "64727f32621f704b22ca7b03",
            "code": "AMT-004",
            "price": 50,
            "weight": 0,
            "color": "Bar",
            "width": 0,
            "length": 3,
            "cut": "BarCut",
            "qty": 47,
            "name": "Bar"
        },
        {
            "_id": "64727f32bce37f442005d3ee",
            "code": "AMT-018",
            "price": 180,
            "weight": 0,
            "color": "Bar",
            "width": 0,
            "length": 6,
            "cut": "BarCut",
            "qty": 8,
            "name": "Bar"
        }
    ]
}
```

> Note how there is a key in the new object for each group and it contains all the items with that name.

Use that grouping array to display one image for each group-key within the object. For the previous example, there would be one picture for `Foo` and another picture for `Bar`.
Find the image to use for the grouping within the backend response, from the `grouping` field, which contains all the group names and the image to use.

Example:

![grouping mode](groupingmode.png)

#### Applying filters on Grouping mode

If the user applies some filter criteria, which can apply for either name, cut or color, create the grouping object again from the backend-response, but use the filter to only consider the items that meets the filtering criteria.
For the previous example, if the user applies the filter for `cut = FooCut`, then the new grouping structure would only contains one group, and the view should only display the image for that group.


### Items mode

When the user clicks on one of the groups from the RPV, change the view mode to `items mode`.
Update the LFP and set the name filter to the name of the group clicked by the user.
During items mode, add the next two more filters to the LFP:
  - size
  - price

Example:

![Alt text](itemsmodeFilter.png)

The first filter `size` needs to be calculated like:

> size = item.length + (item.width > 0 ? " x " + item.width : "")

For example, see the size generated for the next items:

```
# item 1
item.length = 5
item.width = 5
calculated size = "5 x 5"

# item 2
item.length = 5
item.width = 0
calculated size = "5"
```

Note: item.length will always be greater than zero. Only item.width can be ` >= 0 `.

For the `price` filter, get the `min` and `max` for `item.price` and use a slice range selector.

#### Applying filters on items mode

Follow the same strategy from grouping mode to apply the filters, but in this case, do not create the structure grouping by `name`. Instead, reduce the backend response to generate a new array of items and display the results in the screen.

Example:

![items view](itemsview.png)

> Use the `item.code` to get the image for the item by using the url: `https://krono2022.blob.core.windows.net/krono/<item.code>-1`. Note there is a `-` after the `item.code`.


If the user removes the filter for `item.name`, switch back to `grouping mode`.

