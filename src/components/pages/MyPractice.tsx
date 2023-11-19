import React from "react";

interface MyPracticeProps {
  initialMessage: string;
  clickedMessage: string;
  buttonLabel: string;
}

interface MyPracticeState {
  message: string;
}

class MyPractice extends React.Component<MyPracticeProps, MyPracticeState> {
  constructor(props: MyPracticeProps) {
    super(props);

    this.state = {
      message: this.props.initialMessage,
    };
  }

  handleClick() {
    this.setState({
      message: this.props.clickedMessage,
    });
  }

  render() {
    return (
      <div className="MyPractice">
        <p>{this.state.message}</p>
        <button onClick={() => this.handleClick()}>
          {this.props.buttonLabel}
        </button>
      </div>
    );
  }
}

export default MyPractice;
