import React from "react";
import "./LogoCard.scss";
import classNames from "classnames";

interface LogoCardProps {
  logoCardText: string;
  numLetter: number;
}

export default class LogoCard extends React.Component<LogoCardProps> {
  render() {
    const statusClassNames = {
      "LogoCard-firstLetter": this.props.numLetter === 1,
      "LogoCard-secondLetter": this.props.numLetter === 2,
      "LogoCard-thirdLetter": this.props.numLetter === 3,
    };
    return (
      <div className="LogoCard-container">
        <div className={classNames(statusClassNames)}>
          <p className="LogoCard-text">{this.props.logoCardText}</p>
        </div>
      </div>
    );
  }
}
