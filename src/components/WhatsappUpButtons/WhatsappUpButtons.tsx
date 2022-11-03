import React from "react";

import whatsapp from "../../assets/icons/whatsapp.png";
import vector from "../../assets/icons/vector.png";

import style from "./WhatsappUpButtons.module.css";

const WhatsappUpButtons = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style["whatsapp-up-buttons"]}>
      <a href="https://web.whatsapp.com/" target={"blank"}>
        <img src={whatsapp} alt="Whatsapp" />
      </a>
      <button onClick={scrollUp} className={style["up-button"]}>
        <img src={vector} alt="Seta para cima" />
      </button>
    </div>
  );
};

export { WhatsappUpButtons };
