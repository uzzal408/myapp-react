/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Functional Component

// eslint-disable-next-line react/prop-types
// function Clock({ locale }) {
//   return (
//     <h1 className="heading">
//       <span>Hello, {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

// Class Component Component

class Clock extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <h1 className="heading">
        <span>
          Hello, {this.props.children}-
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}
ReactDOM.render(
  <Clock locale="bn-BD"> Test </Clock>,
  document.getElementById("root")
);

// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
