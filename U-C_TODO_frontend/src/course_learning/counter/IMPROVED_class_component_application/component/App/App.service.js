import AppConstants from "./App.constant.js";

export function resetButtonPress(resetButtonClickEventObj) {
  this.setState((previousState) => {
    return {
      ...previousState,
      operationResult: AppConstants.OPERATION_RESET_DEFAULT,
    };
  });
}

export function updateOperationResult(updatedOperationResultValue) {
  this.setState((previousState) => {
    return {
      ...previousState,
      operationResult: updatedOperationResultValue,
    };
  });
}
