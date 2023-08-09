import React, { Component } from "react";
import MainConstant from "./Main.constant.js";
import OperateNumbers from "../OperatingNumbers/OperatingNumbers.component.jsx";
import "./Main.style.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operationResult: MainConstant.OPERATION_RESULT_INIT,
    };
    this.updateOperationResult = this.updateOperationResult.bind(this);
    this.resetOperationResult = this.resetOperationResult.bind(this);
  }

  // Function to update the operation result using MainService
  updateOperationResult(newValue) {
    this.setState((prevState) => ({
      ...prevState,
      operationResult: newValue,
    }));
  }

  resetOperationResult() {
    this.setState((prevState) => ({
      ...prevState,
      operationResult: MainConstant.RESULT_RESET_VALUE,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="operating-numbers-grid">
          <OperateNumbers
            updateOperationResult={this.updateOperationResult}
            operationOperand={this.state.operationResult}
          />
        </div>
        <div className="operation-result">{this.state.operationResult}</div>
        <div className="reset-operation-result">
          <button
            className="reset-operation-result-button"
            onClick={this.resetOperationResult}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}
