import React ,{useState} from "react";
//import { Link } from "react-router-dom";

import "../css/header.css";

const Header = ({setsearchProd}) => {

  const [search, setsearch]=useState('');
  const [error,saveError] = useState(false) 

  const searchProducts = e => {
    e.preventDefault();
    // validar formulario
    if(search===''){
      saveError(true);
      return;
    }
    saveError(false);
    setsearchProd(search);
  }


  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark color fixed-top">
        <button
          className="navbar-toggler navbar-togger-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <a className="navbar-brand" href="#">
          <img
            data-testid="imgLogo"
            style={{ maxWidth: "100px", maxHeigth: "100px" }}
            className="logo d-inline-block align-top"
            src="https://i.postimg.cc/qvqmHQNy/image.png"
            alt="logo"
          />
        </a>
        <a className="navbar-brand" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
        
          <form onSubmit={searchProducts} className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 form-size "
              type="text"
              placeholder="Buscar productos"
              aria-label="Search"
              onChange={e=>setsearch(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit" value="Buscar"
            >
             Buscar
            </button>
          </form >
          
          <ul class="navbar-nav mr-auto d-none d-xl-block">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          
        

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div id="barraNav" className="d-sm-block d-md-none">
            <ul className="nav d-xl-block">
              <li className="nav-item containerNavList">
                <a className="nav-link active listNav" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item containerNavList">
                <a className="nav-link listNav" href="#">
                  Catalogo
                </a>
              </li>
              <li className="nav-item containerNavList">
                <a className="nav-link active listNav" href="#">
                  Mi Perfil
                </a>
              </li>

              <li className="nav-item containerNavList">
                <a className="nav-link listNav" href="#">
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
