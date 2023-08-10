import React, { Component } from "react";
import AppStyles from "./CounterApp.style.js";
import AppConstants from "./CounterApp.constant.js";
import {
  resetButtonPress,
  updateOperationResult,
} from "./CounterApp.service.js";
import OperationPanel from "../OperationPanel/OperationPanel.component.jsx";

export default class CounterApp extends Component {
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
        <p style={AppStyles.operationResult}>{this.state.operationResult}</p>
        <div style={AppStyles.resetButtonDiv}>
          <button style={AppStyles.resetButton} onClick={this.resetButtonPress}>
            {AppConstants.RESET_OPERATION}
          </button>
        </div>
      </>
    );
  }
}
