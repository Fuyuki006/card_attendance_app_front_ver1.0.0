import React from "react";
import "./LogoCard.scss";
import classNames from "classnames";
interface LogoCardProps {
  logoCardText: string;
  numLetter: number;
}

export default class LogoCard extends React.Component<LogoCardProps> {
  constructor(props: LogoCardProps) {
    super(props);

    this.state = {
      message: this.props.logoCardText,
    };
  }

  render() {
    const statusClassNames = {
      "LogoCard-firstLetter": this.props.numLetter === 1,
      "LogoCard-secondLetter": this.props.numLetter === 2,
      "LogoCard-thirdLetter": this.props.numLetter === 3,
    };
    console.log(this.props.numLetter);
    return (
      <div className="LogoCard-container">
        <div className={classNames(statusClassNames)}>
          <p className="LogoCard-text">{this.props.logoCardText}</p>
        </div>
      </div>
    );
  }
}
