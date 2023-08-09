import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.style.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(
    buttonClickEventObj,
    updateOperationResult,
    operatingNumber,
    currentResult,
  ) {
    buttonClickEventObj.target.innerText.includes("+")
      ? updateOperationResult(
          parseInt(operatingNumber.split("+")[1]) + currentResult,
        )
      : updateOperationResult(
          parseInt(operatingNumber.split("-")[1]) * -1 + currentResult,
        );
  }

  render() {
    return (
      <button
        className="Button"
        onClick={(e) =>
          this.onButtonClick(
            e,
            this.props.updateOperationResult,
            this.props.operatingNumber,
            this.props.currentResult,
          )
        }
      >
        <span
          style={{
            fontSize: 20,
          }}
        >
          {this.props.operatingNumber}
        </span>
      </button>
    );
  }
}

Button.propTypes = {
  operatingNumber: PropTypes.string.isRequired,
  currentResult: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
};
