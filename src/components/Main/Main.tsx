import React, { useState } from "react";

import { Sobre } from "./Sobre/Sobre";
import { FormaDePagamento } from "./FormaDePagamento/FormaDePagamento";
import { Entrega } from "./Entrega/Entrega";
import { TrocaEDevolucao } from "./TrocaEDevolucao/TrocaEDevolucao";
import { SegurancaEPrivacidade } from "./SegurancaEPrivacidade/SegurancaEPrivacidade";
import { Contato } from "./Contato/Contato";

import home from "../../assets/icons/home.png";
import arrow from "../../assets/icons/arrow.png";
import Institucional from "../../assets/icons/institucional.png";

import style from "./Main.module.css";

const Main = () => {
  const [navListState, changeNavListState] = useState({
    activeObject: { title: "Sobre", content: <Sobre /> },
    objects: [
      { title: "Sobre", content: <Sobre /> },
      { title: "Forma de Pagamento", content: <FormaDePagamento /> },
      { title: "Entrega", content: <Entrega /> },
      { title: "Troca e Devolução", content: <TrocaEDevolucao /> },
      { title: "Segurança e privacidade", content: <SegurancaEPrivacidade /> },
      { title: "Contato", content: <Contato /> },
    ],
  });

  function toggleActive(index: number) {
    changeNavListState({
      ...navListState,
      activeObject: navListState.objects[index],
    });
  }

  function toggleActiveStyles(index: number) {
    if (navListState.objects[index] === navListState.activeObject) {
      return "nav-list-item-active";
    } else {
      return "nav-list-item-inactive";
    }
  }

  function renderContent() {
    return navListState.activeObject.content;
  }

  const [isActive, setIsActive] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="main">
      <div className={style["menu-button-container"]}>
        <input
          onClick={handleClick}
          className={style["menu-button-input"]}
          type="checkbox"
          id="menu-button"
        />

        <label className={style["menu-button-label"]} htmlFor="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className={style["main-nav"]}>
        <a href="/">
          <img className={style["main-nav-home"]} src={home} alt="Home Icon" />
        </a>
        <img className={style["main-nav-arrow"]} src={arrow} alt="Seta Icon" />
        <a href="/">
          <img
            className={style["main-nav-institucional"]}
            src={Institucional}
            alt="Institucional Icon"
          />
        </a>
      </div>
      <h1 className={style["main-title"]}>Institucional</h1>
      <div
        className={
          isActive
            ? style["main-content-wrapper-off"]
            : style["main-content-wrapper-on"]
        }
      >
        <div className="main-content-nav">
          <ul className={style["nav-list"]}>
            {navListState.objects.map((elements, index) => (
              <li
                key={index}
                className={style[toggleActiveStyles(index)]}
                onClick={() => {
                  toggleActive(index);
                }}
              >
                {elements.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={style["main-content"]}>{renderContent()}</div>
      </div>
    </div>
  );
};

export { Main };
