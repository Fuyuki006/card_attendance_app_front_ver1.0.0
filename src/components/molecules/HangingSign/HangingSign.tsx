import React from "react";
import Chain from "../../atoms/Chain/Chain";
import Sign from "../../atoms/Sign/Sign";
import "./HangingSign.scss";

interface HangingSignProps {
  text: string;
}

export default class HangingSign extends React.Component<HangingSignProps> {
  render() {
    return (
      <div className="HangingSign-container">
        <div className="HangingSign-chains">
          <div className="HangingSign-leftChain">
            <Chain />
          </div>
          <div className="HangingSign-rightChain">
            <Chain />
          </div>
        </div>
        <div className="HangingSign-sign">
          <Sign text={this.props.text} />
        </div>
      </div>
    );
  }
}
