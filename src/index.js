import { RadioButton } from "kintone-ui-component";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class MyCustomization extends React.Component {
  constructor(opts) {
    super(opts);
    var items = [
      {
        label: "Orange",
        value: "Orange",
        isDisabled: false
      },
      {
        label: "Banana",
        value: "Banana",
        isDisabled: false
      },
      {
        label: "Lemon",
        value: "Lemon",
        isDisabled: true
      }
    ];
    this.state = {
      items: items,
      value: "Banana"
    };
  }

  render() {
    return (
      <div className="kintone-UI">
        <h2>My kintone UI Test</h2>
        <RadioButton
          name="radio"
          items={this.state.items}
          value={this.state.value}
          onChange={value => {
            this.setState({ value });
          }}
        />
        <button onClick={this.handleClick}>Get Value</button>
      </div>
    );
  }

  handleClick = () => {
    console.log(this.state.value);
  };
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Text
//         value={this.state.value}
//         onChange={value => {
//           this.setState({ value });
//         }}
//       />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
ReactDOM.render(<MyCustomization />, rootElement);
