import React from "react";
import ReactDOM from "react-dom";
import { VictoryExample } from "./victory";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <VictoryExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
