import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/ProximaNova/proxima-nova-bold.otf";
import "./global.css";

import { Home } from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Home />);
