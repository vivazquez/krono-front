import axios from 'axios';
import data from '../data';

export const getImgs = async (req) => {
    try{
        const res = await axios.get(`${data.apiBaseUrl}/main/pic`);
        return res.data;
    }catch(err){
        return false;
    }     
}

export const getCollections = async (req) => {
    try{
        const res = await axios.get(`${data.apiBaseUrl}/v2/inventory`);
        return res.data;
    }catch(err){
        return false;
    }     
}
