import React from "react";

import { FooterInfosTop } from "./FooterInfosTop/FooterInfosTop";
import { FooterInfosBot } from "./FooterInfosBot/FooterInfosBot";

const Footer = () => {
  return (
    <div className="footer">
      <FooterInfosTop />
      <FooterInfosBot />
    </div>
  );
};

export { Footer };
