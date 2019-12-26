import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Menu } from "./components/menu";
// import { context } from './components/menu/context'

function Header({ context }) {
  return (
    <header>
      <Menu context={context} />
    </header>
  );
}

function App({ context }) {
  const cx = context.getNavContext();

  const [current, setCurrent] = useState(cx.current);
  cx.subscribe(setCurrent);

  return (
    <div className="App">
      <h1>{current}</h1>
      <Header context={context} />
    </div>
  );
}

const list = [];

const menu = ["Home", "About", "Contact"];
const subMenu = { About: ["first", "Second", "third"] };

const context = {
  current: menu[0],
  subscribe: fn => {
    list.push(fn);
  },

  goTo: index => {
    context.current = index;
    list.forEach(fn => {
      fn(index);
    });
  },

  onClick: item => {
    return e => {
      e.stopPropagation();
      context.goTo(item);
    };
  },

  getMenu(item) {
    if (!item) return menu;
    return subMenu[item] || [];
  }
};

const Context = {
  getNavContext: () => context,
  getUserSessionContext: () => context
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App context={Context} />, rootElement);
