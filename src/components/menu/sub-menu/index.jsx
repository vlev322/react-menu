import React from "react";

import MenuItem from "../menu-item";

export default function SubMenu({ context, item }) {
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
