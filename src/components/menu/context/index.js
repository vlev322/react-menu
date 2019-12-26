import menuList from "../menu-data-list";

const list = [];

export const context = {
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
      e.stopPropagation();
      context.goTo(item);
    };
  },

  getMenu(item) {
    if (!item) return menuList.menu;
    return menuList.subMenu[item] || [];
  }
};

// export const Context = {
//   getNavContext: () => context,
//   getUserSessionContext: () => context
// };
