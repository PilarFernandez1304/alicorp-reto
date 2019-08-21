import React from 'react';

const Item = ({ img }) => {
  return (
    <div className="col-md-2 col-4">
      <div className="box">
        <img className="d-block w-100" src={img} alt=""></img>
      </div>
    </div>

  )
}

export default Item;