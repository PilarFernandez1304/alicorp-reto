export const addOrder = (producto, arrPedidos) => {
      if (arrPedidos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = arrPedidos.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            qty: p.qty + 1,
            costo: p.precio * (p.qty + 1)
          };
        } else {
          return p;
        }
      });
     
      return newProductos2;
    } else {
      // si lo pide por primera vez
      const newProductos = [
        ...arrPedidos,
        {
          id: producto.id,
          name: producto.name,
          precio: producto.precio,
          qty: producto.qty,
          costo: producto.costo
        }
      ];
      console.log(newProductos);
     
      return newProductos;
    }
  };

  export const  addingArrOfOrdersToObject = (arrPedidos)=>{
  const obj= {
      orders:arrPedidos,
    }
    return obj;

  }
 export const  deleteProductOrder = (id, arrPedidos) => {
    const newProductos = arrPedidos.filter((p) => p.id !== id);
    return newProductos;
  };
  export const decreasingQty = (producto, arrPedidos) => {
    if (arrPedidos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = arrPedidos.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            qty: (p.qty - 1) < 0 ? 0 :( p.qty - 1),
            costo: p.precio * (p.qty - 1) < 0 ? 0 : p.precio * (p.qty - 1)
          };
        } else {
          return p;
        }
      });
      return newProductos2;
    }
  };