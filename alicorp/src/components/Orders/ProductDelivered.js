import React from "react";
import Counter from "./Counter";
import{ addOrder,deleteProductOrder} from '../../controller/Orders';
const ProductoDelivered = ({product,order,orders ,setOrders
 
}) => (
  <tr>
    <td>
{order.name}
    </td>
    <td>{order.precio}</td>
    <td>producto.price-suggested</td>
    <td>    <Counter qty={order.qty} order={order} orders={orders} setOrders ={setOrders}/></td>
    <td>producto.gananancia</td>
     <td>{order.costo}</td>
    <td>
      <button
      className="btn-none"
      type="button"
        onClick={() => {
          setOrders(deleteProductOrder(product.id,orders));
         
        }}
      >
        <img src="https://i.postimg.cc/pdd1tZXB/delete.png" className="btn-img-delete"/>
      </button>
    </td>
  </tr>
);
export default ProductoDelivered;