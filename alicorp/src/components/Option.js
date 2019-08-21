import React from 'react';
import auth from './Routes/auth'

const Option = ({ name, aClass, route, props }) => {
  return (
    <ul className="nav nav-tabs w-100 my-3 d-flex justify-content-between" role="tablist">
      <li className="nav-item">
        <a className={aClass} href="#" >{name}</a>
      </li>
      <li className="nav-item">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          auth.login(() => { props.history.push(route) })
        }} > Ver más</a>
      </li>
    </ul>
  )
};

export default Option;