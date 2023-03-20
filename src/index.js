import React from "react";
import ReactDOM from "react-dom";
// element;
// const element = React.createElement("h1", "", "Hello Element");
// jsx
// const jsx = <h1>Hello React, From Jsx</h1>;

setInterval(() => {
  const immutubleJsx = (
    <h1 className="heading">
      <span>Hello, {new Date().toLocaleTimeString()}</span>
    </h1>
  );

  ReactDOM.render(immutubleJsx, document.getElementById("root"));
}, 1000);

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
