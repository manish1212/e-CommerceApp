import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import axios from "axios";

const listProducts = () => {
    try {
        dispatchEvent(PRODUCT_LIST_REQUEST);
        //SEND AJAX REQUES TOT THE SERVER
        const {data} = await axios.get('/api/products');
        dispatchEvent({type:PRODUCT_LIST_SUCCESS, payload: data});
    }
    catch(error){
        dispatchEvent({type:PRODUCT_LIST_FAIL, payload: data});
    }
    
}
export {listProducts}