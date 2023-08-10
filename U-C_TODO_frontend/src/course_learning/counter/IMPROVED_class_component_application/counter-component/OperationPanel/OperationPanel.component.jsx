import React, { Component } from "react";
import "./OperationPanel.style.css";
import PropTypes from "prop-types";
import OperationPanelConstants from "./OperationPanel.constant.js";
import ButtonRow from "../ButtonRow/ButtonRow.component";

export default class OperationPanel extends Component {
  render() {
    return (
      <div className="operation-panel">
        {OperationPanelConstants.operationValues.map(
          (operatingValue, index) => (
            <ButtonRow
              operatingValue={operatingValue}
              currentResultValue={this.props.currentResultValue}
              updateOperationResult={this.props.updateOperationResult}
              key={index}
            />
          ),
        )}
      </div>
    );
  }
}

OperationPanel.propTypes = {
  currentResultValue: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
};
