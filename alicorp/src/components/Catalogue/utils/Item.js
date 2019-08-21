import React from 'react';
import auth from '../../Routes/auth'

const Item = ({ img, route, props }) => {
  return (
    <div className="col-md-4 col-6 my-2 p-0" onClick={() =>auth.login(() => { props.history.push(route) })} >
      <div className="box">
        <img className="d-block w-100" src={img} alt=""></img>
      </div>
    </div>

  )
}

export default Item;