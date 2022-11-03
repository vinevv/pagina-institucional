import React from "react";

import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
};

export { Home };
