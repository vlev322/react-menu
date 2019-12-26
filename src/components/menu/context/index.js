import menuList from "../menu-data-list";

const list = [];

const context = {
  current: menuList[0],

  subscribe: fn => {
    list.push(fn);
  },

  goTo: index => {
    context.current = index;
    console.log("Click", index);
    list.forEach(fn => {
      fn(index);
    });
  },

  onClick: item => e => {
    e.stopPropagation();
    context.goTo(item);
  },

  getMenu(item) {
    if (!item) return menuList.menu;
    return menuList.subMenu[item] || [];
  }
};

export const Context = {
  getNavContext: () => context
};
