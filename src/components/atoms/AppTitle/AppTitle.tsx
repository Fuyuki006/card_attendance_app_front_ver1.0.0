import React from "react";
import "./AppTitle.scss";

interface AppTitleProps {
  appTitleText: string;
}

export default class AppTitle extends React.Component<AppTitleProps> {
  render() {
    return (
      <div className="AppTitle-container">
        <h1 className="AppTitle-text">{this.props.appTitleText}</h1>
      </div>
    );
  }
}
