import React from "react";

import style from "./FooterInfosBot.module.css";

import masterFlag from "../../../assets/icons/master.png";
import visaFlag from "../../../assets/icons/visa.png";
import dinersFlag from "../../../assets/icons/diners.png";
import eloFlag from "../../../assets/icons/elo.png";
import hiperFlag from "../../../assets/icons/hiper.png";
import pagseguroFlag from "../../../assets/icons/pagseguro.png";
import boletoFlag from "../../../assets/icons/boleto.png";
import vtexFlag from "../../../assets/icons/vtex.png";
import vtexSignature from "../../../assets/icons/vtex-signature.png";
import m3Signature from "../../../assets/icons/m3-signature.png";

const FooterInfosBot = () => {
  return (
    <div className={style["footer-infos-bot"]}>
      <p className={style["footer-infos-bot-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span> sed do eiusmod tempor</span>
      </p>
      <div className={style["footer-flags"]}>
        <a className={style["footer-small-flag"]} href="/">
          <img src={masterFlag} alt="Bandeira Master" />
        </a>
        <a className={style["footer-small-flag"]} href="/">
          <img src={visaFlag} alt="Bandeira Visa" />
        </a>
        <a className={style["footer-small-flag"]} href="/">
          <img src={dinersFlag} alt="Bandeira Diners" />
        </a>
        <a className={style["footer-small-flag"]} href="/">
          <img src={eloFlag} alt="Bandeira Elo" />
        </a>
        <a className={style["footer-small-flag"]} href="/">
          <img src={hiperFlag} alt="Bandeira Hiper" />
        </a>
        <a className={style["footer-small-flag"]} href="/">
          <img src={pagseguroFlag} alt="Bandeira PagSeguro" />
        </a>
        <a className={style["footer-small-flag"]} href="/">
          <img src={boletoFlag} alt="Bandeira Boleto" />
        </a>
        <span></span>
        <a className={style["footer-big-flag"]} href="/">
          <img src={vtexFlag} alt="Bandeira Vtex" />
        </a>
      </div>
      <div className={style["footer-signatures-wrapper"]}>
        <a href="/">
          <img
            className={style["footer-signatures"]}
            src={vtexSignature}
            alt="Assitaruas Vtex"
          />
        </a>
        <a href="/">
          <img
            className={style["footer-signatures"]}
            src={m3Signature}
            alt="Assitarua M3"
          />
        </a>
      </div>
    </div>
  );
};

export { FooterInfosBot };
