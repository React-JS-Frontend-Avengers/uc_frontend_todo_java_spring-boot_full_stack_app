export function onOperationButtonClick(operationButtonClickEventObj) {
  operationButtonClickEventObj.target.innerText.includes("+")
    ? this.props.updateOperationResult(
        this.props.currentResultValue + this.props.buttonOperationValue,
      )
    : this.props.updateOperationResult(
        this.props.currentResultValue + this.props.buttonOperationValue * -1,
      );
}
