
import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div",{id:"parent"},"Jaat Sarlatjfrhjke hghgj");
console.log(div);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(div);