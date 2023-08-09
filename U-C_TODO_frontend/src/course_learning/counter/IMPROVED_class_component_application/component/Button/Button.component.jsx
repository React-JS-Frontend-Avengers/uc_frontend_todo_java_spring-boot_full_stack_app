import React, { Component } from "react";
import PropTypes from "prop-types";
import { onOperationButtonClick } from "./Button.EventHandler.js";
import "./Button.style.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onOperationButtonClick = onOperationButtonClick.bind(this);
  }

  render() {
    return (
      <button
        className="operation-button"
        onClick={this.onOperationButtonClick}
      >
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
};
