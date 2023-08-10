import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.component";
import ButtonRowConstants from "./ButtonRow.constant.js";
import ButtonRowStyles from "./ButtonRow.style.js";

export default class ButtonRow extends Component {
  render() {
    return (
      <div style={ButtonRowStyles.buttonRow}>
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
          isRightButton={true}
        ></Button>
      </div>
    );
  }
}

ButtonRow.propTypes = {
  operatingValue: PropTypes.number.isRequired,
  currentResultValue: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
};
