import React, { FC } from "react";

import "./App.css";
import Counter from "./containers/Counter";

const App: FC = () => {
  return (
    <div className="counter">
      <header>
        <h1>counter</h1>
      </header>
      <Counter />
    </div>
  );
};

export default App;
