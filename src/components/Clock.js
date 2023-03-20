import React from "react";
import PropTypes from "prop-types";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  static propTypes = {
    locale: PropTypes.string.isRequired,
  };

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

  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <h1 className="heading">
        <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

export default Clock;
