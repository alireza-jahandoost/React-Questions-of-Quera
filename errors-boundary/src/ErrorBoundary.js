import React, { Component } from "react";
import Error from "./Error";
export default class ErrorBoundary extends Component {
  componentDidCatch(error) {
    this.props.changeError(error);
  }
  render() {
    if (this.props.error) {
      return <Error reloadBtnOnClick={this.props.onReloadButtonPressed} />;
    }
    return <>{this.props.children}</>;
  }
}
