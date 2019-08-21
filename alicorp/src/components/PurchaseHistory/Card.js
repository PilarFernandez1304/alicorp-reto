import React from 'react';

const Card = ({ month, price, item1, item2 }) => {
  return (
    <div class="card" >
      <div class="card-header">
        {month}
      </div>
      <div class="card-body">
        <tr className='d-flex width-100 text-align border-bottom my-2'>
          <td className="d-flex col-6 text-align-left">
            <p  className='my-0 text-gray'>{item1} </p>
          </td>
          <td className="col-6">
            <p className='my-0 text-gray'>S/. {price} </p>
          </td>
        </tr><tr className='d-flex width-100 text-align border-bottom my-2'>
          <td className="d-flex col-6 text-align-left">
            <p  className='my-0 text-gray'> {item2} </p>
          </td>
          <td className="col-6">
            <p className='my-0 text-gray'></p>
          </td>
        </tr>
      </div>
    </div>
  )
}

export default Card;