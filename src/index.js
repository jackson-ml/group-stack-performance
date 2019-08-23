import React from "react";
import ReactDOM from "react-dom";
import { VictoryExample } from "./victory";

import "./styles.css";

class ShowChartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false}
  }


  render = () =>
  <>
    <div className={"showHideButton"}>
      <input
        type={"button"}
        value={"show the chart"}
        onClick={() => this.setState({show: !this.state.show})}
        />
    </div>
    {this.state.show && <VictoryExample/>}
  </>;
}
function App() {
  return (
    <div className="App">
      <ShowChartButton/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
