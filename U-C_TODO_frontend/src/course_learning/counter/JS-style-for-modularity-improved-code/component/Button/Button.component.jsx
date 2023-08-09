import React, { Component } from "react";
import PropTypes from "prop-types";
import { onOperationButtonClick } from "./Button.EventHandler.js";
import ButtonStyles from "./Button.style.js";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onOperationButtonClick = onOperationButtonClick.bind(this);
    this.buttonStyle = this.props.isRightButton
      ? { ...ButtonStyles.operationButton, marginLeft: 5 }
      : ButtonStyles.operationButton;
  }

  render() {
    return (
      <button style={this.buttonStyle} onClick={this.onOperationButtonClick}>
        {this.props.buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  currentResultValue: PropTypes.number.isRequired,
  buttonOperationValue: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
  isRightButton: PropTypes.bool.isRequired,
};
