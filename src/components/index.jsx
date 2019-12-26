import React, { useState } from "react";

import { Header } from "./header";

export function App({ context }) {
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
