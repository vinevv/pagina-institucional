import React from "react";
import { useState } from "react";

import style from "./FooterInfosTop.module.css";

import facebookImage from "../../../assets/icons/facebook.png";
import instagramImage from "../../../assets/icons/instagram.png";
import twitterImage from "../../../assets/icons/twitter.png";
import youtubeImage from "../../../assets/icons/youtube.png";
import linkedinImage from "../../../assets/icons/linkedin.png";

const FooterInfosTop = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClick1 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsActive1((current) => !current);
  };

  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsActive2((current) => !current);
  };

  const handleClick3 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsActive3((current) => !current);
  };

  return (
    <div className={style["footer-infos-top"]}>
      <div className={style["footer-lists-wrapper"]}>
        <ul className={style["footer-list"]}>
          <li className={style["footer-list-title"]}>
            Institucional
            <button
              className={style["footer-list-button"]}
              onClick={handleClick1}
            >
              <div className={style["plus-button-container"]}>
                <div
                  className={
                    isActive1
                      ? style["plus-button-container-label-on"]
                      : style["plus-button-container-label-off"]
                  }
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </li>

          <a
            className={
              isActive1
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Quem somos</li>
          </a>
          <a
            className={
              isActive1
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>
              Política de privacidade
            </li>
          </a>
          <a
            className={
              isActive1
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Segurança</li>
          </a>
          <a
            className={
              isActive1
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Seja um revendedor</li>
          </a>
        </ul>
        <ul className={style["footer-list"]}>
          <li className={style["footer-list-title"]}>
            Dúvidas
            <button
              className={style["footer-list-button"]}
              onClick={handleClick2}
            >
              <div className={style["plus-button-container"]}>
                <div
                  className={
                    isActive2
                      ? style["plus-button-container-label-on"]
                      : style["plus-button-container-label-off"]
                  }
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </li>
          <a
            className={
              isActive2
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Entrega</li>
          </a>
          <a
            className={
              isActive2
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Pagamento</li>
          </a>
          <a
            className={
              isActive2
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Trocas e devoluções</li>
          </a>
          <a
            className={
              isActive2
                ? style["footer-list-link-on"]
                : style["footer-list-link-off"]
            }
            href="/"
          >
            <li className={style["footer-list-text"]}>Dúvidas frequentes</li>
          </a>
        </ul>
        <ul className={style["footer-list"]}>
          <li className={style["footer-list-title"]}>
            Fale conosco
            <button
              className={style["footer-list-button"]}
              onClick={handleClick3}
            >
              <div className={style["plus-button-container"]}>
                <div
                  className={
                    isActive3
                      ? style["plus-button-container-label-on"]
                      : style["plus-button-container-label-off"]
                  }
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </li>
          <li
            className={
              isActive3
                ? style["footer-list-title-contact-on"]
                : style["footer-list-title-contact-off"]
            }
          >
            Atendimento ao consumidor
          </li>
          <li
            className={
              isActive3
                ? style["footer-list-title-contact-on-number"]
                : style["footer-list-title-contact-off-number"]
            }
          >
            (11) 4159-9504
          </li>
          <li
            className={
              isActive3
                ? style["footer-list-title-contact-on"]
                : style["footer-list-title-contact-off"]
            }
          >
            Atendimento online
          </li>
          <li
            className={
              isActive3
                ? style["footer-list-title-contact-on-number"]
                : style["footer-list-title-contact-off-number"]
            }
          >
            (11) 99433-8825
          </li>
        </ul>
      </div>
      <div className={style["footer-contacts-wrapper"]}>
        <div className={style["footer-media-wrapper"]}>
          <a href="/">
            <img src={facebookImage} alt="Facebook Logo" />
          </a>
          <a href="/">
            <img src={instagramImage} alt="Instagram Logo" />
          </a>
          <a href="/">
            <img src={twitterImage} alt="Twitter Logo" />
          </a>
          <a href="/">
            <img src={youtubeImage} alt="YouTube Logo" />
          </a>
          <a href="/">
            <img src={linkedinImage} alt="LinkedIn Logo" />
          </a>
        </div>
        <a className={style["footer-list-link-off"]} href="/">
          <p>www.loremipsum.com</p>
        </a>
      </div>
    </div>
  );
};

export { FooterInfosTop };
