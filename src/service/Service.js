import axios from 'axios';
import data from '../data';


// const headers = { 
//     headers: {
//         "Accept": "application/json",
//         "Authorization" : `Bearer ${userInfo.access_token}`
//     } 
// };

export const getImgs = async (req) => {
    try{
        const res = await axios.get(`${data.apiBaseUrl}/main/pic`);
        return res.data;
    }catch(err){
        return false;
    }     
}

