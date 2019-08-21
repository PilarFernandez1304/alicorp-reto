import React from "react";
//import { Link } from "react-router-dom";
import List from './List'
import "../../css/header.css";

const Header = ({props}) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark color fixed-top">
        <div className="w-100 d-flex justify-content-between">
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
        </div>

        <form className="w-100 d-flex justify-content-between form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 form-size m-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-success my-2 my-sm-0 ml-2 "
            type="submit"
          >
            Search
          </button>
        </form>

        {/* <ul class="navbar-nav mr-auto">
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
 */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div id="barraNav" className="d-sm-block d-md-none">
            <ul className="nav d-xl-block">
              <List name="Inicio" props={props} route="/home"/>
              <List name="Catálogo" props={props} route="/catalogue" />
              <List name="Carrito" props={props} route="/carrito" />
              <List name="Perfil" props={props} route="/profile"/>
              <List name="Historial de compras" props={props} route="/purchase" />
              <List name="Historial de ventas" props={props} route="/selling" />
              <List name="Cerrar sesión" props={props} route="/login"/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
