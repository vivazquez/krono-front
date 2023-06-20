import { Carousel } from 'react-bootstrap';


export default function SliderBox(props) {
  return (
    <Carousel slide>
          {
            props.sliders.map((slider, index) => (
                <Carousel.Item interval={4000} key={index}>
                    <img
                    className="d-block w-100"
                    src={slider.url}
                    alt="First slide"
                    />
                </Carousel.Item>
            ))
          }
        
    </Carousel>
  );
}