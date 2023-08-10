import React, { Component } from "react";
import "./CounterApp.style.css";
import AppConstants from "./CounterApp.constant.js";
import {
  resetButtonPress,
  updateOperationResult,
} from "./CounterApp.service.js";
import OperationPanel from "../OperationPanel/OperationPanel.component.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operationResult: AppConstants.OPERATION_INIT_DEFAULT,
    };
    this.resetButtonPress = resetButtonPress.bind(this);
    this.updateOperationResult = updateOperationResult.bind(this);
  }

  render() {
    return (
      <>
        <OperationPanel
          currentResultValue={this.state.operationResult}
          updateOperationResult={this.updateOperationResult}
        />
        <p className="operation-result">{this.state.operationResult}</p>
        <div className="reset-button-div">
          <button className="reset-button" onClick={this.resetButtonPress}>
            {AppConstants.RESET_OPERATION}
          </button>
        </div>
      </>
    );
  }
}
