import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonRow from "../ButtonRow/ButtonRow.component.jsx";
import OperateNumbersConstant from "./OperatingNumbers.constant.js";
import "./OperatingNumbers.style.css";

export default class OperateNumbers extends Component {
  render() {
    return (
      <div className="operating-numbers">
        {OperateNumbersConstant.OPERATE_NUMBERS.map((number, index) => (
          <ButtonRow
            operatingNumber={number}
            operationOperand={this.props.operationOperand}
            updateOperationResult={this.props.updateOperationResult}
            key={index}
          />
        ))}
      </div>
    );
  }
}

OperateNumbers.propTypes = {
  operationOperand: PropTypes.number.isRequired,
  updateOperationResult: PropTypes.func.isRequired,
};
