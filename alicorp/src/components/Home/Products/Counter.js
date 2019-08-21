import React from "react";
import {addOrder,decreasingQty} from '../../../controller/Orders';

import firebase from "../../../controller/firebase";
import {addingArrOfOrdersToObject} from '../../../controller/Orders';
const Counter = ({product,setOrders,orders}) => {
 
  return orders.map((ele)=>(

   <div class="btn-group w-100" role="group" aria-label="Basic example">
     
      <button type="button" class="btn col-4 btn-success"
      onClick={()=>{
        setOrders(decreasingQty(product,orders))
        // firebase.addOrderToFirebase(addingArrOfOrdersToObject(orders));
      }}>
        <i className="fas fa-minus blue-color"></i>
      </button>
      <button type="button" class="btn col-4 btn-success">
        <span data-testid='qty' className='text-gray' >{ele.qty}</span>
      </button>
      <button type="button" class="btn col-4 btn-success"  onClick={()=>{
      
        setOrders(addOrder(product,orders));
      }}     
      >
        <i className="fas fa-plus blue-color"></i>
      </button>
    </div>
  ))
 
}

export default Counter;