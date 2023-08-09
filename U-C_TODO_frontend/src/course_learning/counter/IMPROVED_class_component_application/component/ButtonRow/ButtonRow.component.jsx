import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.component";
import ButtonRowConstants from "./ButtonRow.constant.js";
import "./ButtonRow.style.css";

export default class ButtonRow extends Component {
  render() {
    return (
      <div className="button-row">
        <Button
          buttonText={`${ButtonRowConstants.POSITIVE_SIGN}${this.props.operatingValue}`}
          currentResultValue={this.props.currentResultValue}
          buttonOperationValue={this.props.operatingValue}
          updateOperationResult={this.props.updateOperationResult}
        />
        <Button
          buttonText={`${ButtonRowConstants.NEGATIVE_SIGN}${this.props.operatingValue}`}
          currentResultValue={this.props.currentResultValue}
          buttonOperationValue={this.props.operatingValue}
          updateOperationResult={this.props.updateOperationResult}
        />
      </div>
    );
  }
}

ButtonRow.propTypes = {
  operatingValue: PropTypes.number.isRequired,
  currentResultValue: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
};
