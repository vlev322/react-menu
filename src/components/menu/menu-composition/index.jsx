import React from "react";

import MenuItem from "../menu-item";
import SubMenu from "../sub-menu";

export function Menu({ context }) {
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
