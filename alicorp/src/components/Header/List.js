import React from 'react';
import auth from '../Routes/auth'
import firebase from '../../controller/firebase'
const List = ({ name, props, route }) => {
  return (
    <li className="nav-item containerNavList">
      <a className="nav-link listNav" href="#" onClick={(e) => {
        e.preventDefault();
        route !== "/login" ?
        auth.login(() => { props.history.push(route) }) :
        firebase.logout().then((res)=> auth.logout(() => { props.history.push(route) }))
        
      }} >
        {name}
      </a>
    </li>
  )
};

export default List;