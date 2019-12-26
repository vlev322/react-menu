import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components";
import { Context } from "./components/menu/context";

const rootElement = document.getElementById("root");
ReactDOM.render(<App context={Context} />, rootElement);
