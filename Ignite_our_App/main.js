
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/app";

// ReactElement => JS Object => HTMLElement
// const div = React.createElement("div",{id:"parent"},"React element by React");
// console.log(div);

//JSX => Javascript XML => HTML like syntax => collection of JS and HTML...
// const jsxHeading = <h1>React element by JSX</h1>

// React Component => class based => function based

// function First(){
//     return <h1>Jaat Sarkar</h1>
// }

// const Second = ()=>{
//     return <div className="container">
//         <First/>
//         <h1>Orr Bhai E bhi cheetai bole...?</h1>
//     </div>
// }

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);
