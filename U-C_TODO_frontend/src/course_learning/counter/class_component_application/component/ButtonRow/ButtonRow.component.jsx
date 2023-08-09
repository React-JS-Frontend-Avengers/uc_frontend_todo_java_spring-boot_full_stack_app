import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.component.jsx";
import "./ButtonRow.style.css";

export default class ButtonRow extends Component {
  render() {
    return (
      <div className="button-row">
        <Button
          operatingNumber={`+${this.props.operatingNumber}`}
          currentResult={this.props.operationOperand}
          updateOperationResult={this.props.updateOperationResult}
        />
        <Button
          operatingNumber={`-${this.props.operatingNumber}`}
          currentResult={this.props.operationOperand}
          updateOperationResult={this.props.updateOperationResult}
        />
      </div>
    );
  }
}

ButtonRow.propTypes = {
  operatingNumber: PropTypes.number.isRequired,
  operationOperand: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
};
