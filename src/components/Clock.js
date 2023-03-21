import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }

  componentDidMount() {
    this.clocktimer = setInterval(() => this.timer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clocktimer);
  }

  timer() {
    this.setState({
      date: new Date(),
    });
  }
  changeTimeType = (locale) => {
    this.setState({
      locale,
    });
  };
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span>{date.toLocaleTimeString(locale)}</span>
        </h1>
        <button onClick={() => this.changeTimeType("en-US")}>Click Me</button>
      </div>
    );
  }
}

export default Clock;
