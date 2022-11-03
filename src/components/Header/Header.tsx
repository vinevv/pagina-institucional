import React from "react";

import logo from "../../assets/images/m3academylogo.png";
import search from "../../assets/icons/search.png";
import cart from "../../assets/icons/cart.png";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className="header">
      <div className={style["header-header"]}>
        <div className={style["fake-button"]} />
        <a className={style["header-logo"]} href="/">
          <img src={logo} alt="Logo M3" />
        </a>
        <div className={style["header-search-wrapper"]}>
          <input
            className={style["search-input"]}
            type="text"
            placeholder="Buscar..."
          />
          <a href="/">
            <img
              className={style["search-button"]}
              src={search}
              alt="Buscador"
            />
          </a>
        </div>
        <div className={style["header-buttons-wrapper"]}>
          <button className={style["header-button"]}>ENTRAR</button>
          <a className={style["header-button"]} href="/">
            <img src={cart} alt="Carrinho" />
          </a>
        </div>
        <div className={style["header-search-wrapper-mobile"]}>
          <input
            className={style["search-input"]}
            type="text"
            placeholder="Buscar..."
          />
          <a href="/">
            <img
              className={style["search-button"]}
              src={search}
              alt="Buscador"
            />
          </a>
        </div>
      </div>
      <div className={style["header-nav"]}>
        <a className={style["header-nav-button"]} href="/">
          <span>CURSOS</span>
        </a>
        <a className={style["header-nav-button"]} href="/">
          <span>SAIBA MAIS</span>
        </a>
      </div>
    </div>
  );
};

export { Header };
