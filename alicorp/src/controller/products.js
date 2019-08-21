const controllProds = {
  'delete': (arr, id) => arr.filter(p => p.id !== id),
  increase: (arr, id) => {
    if (arr.map(p => p.id).includes(id)) {
      return arr.map((el) => {
        if (el.id === id) {
          return { id: id, qty: el.qty + 1 }
        }
        return el
      })
    }
    return [
      ...arr,
      { id: id, qty: 1 },
    ]
  },
  decrease: (arr, id) => {
    if (arr.filter(p => p.qty > 1).map(p => p.id).includes(id)) {
      return arr.map((el) => {
        if (el.id === id) {
          return { id: id, qty: el.qty - 1 }
        }
        return el
      })
    }
    return controllProds.delete(arr, id)
  },
  mix: (arrData, arrCant) => {
    const newArr = []
    arrData.forEach((el1) => arrCant.forEach((el2) => {
      if (el1.id === el2.id) {
        newArr.push({ ...el1, qty: el2.qty, total: el2.qty * el1.precio })
      }
    })
    )
    return newArr;
  }
  
}

export default controllProds;