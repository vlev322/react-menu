import React, { useState } from "react";
import ReactDOM from "react-dom";

function MenuItem({ item, children, onClick }) {
  return (
    <li onClick={onClick}>
      {item}
      {children}
    </li>
  );
}

function SubMenu({ context, item }) {
  const cx = context.getNavContext();
  const items = cx.getMenu(item);

  return (
    <ul>
      {items.map(item => (
        <MenuItem item={item} onClick={cx.onClick(item)} />
      ))}
    </ul>
  );
}

function Menu({ context }) {
  const cx = context.getNavContext();
  const items = cx.getMenu();

  return (
    <ul>
      {items.map(item => (
        <MenuItem item={item} onClick={cx.onClick(item)}>
          <SubMenu context={context} item={item} />
        </MenuItem>
      ))}
    </ul>
  );
}

function Header({ context }) {
  return (
    <header>
      <Menu context={context} />
    </header>
  );
}

function App({ context, dssdf }) {
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
  current: 0,
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
      e.stopPropogation();
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
