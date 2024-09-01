
// const div = document.createElement("div");
// div.setAttribute("id","parent");
// console.log(div);

// document.querySelector("body").appendChild(div);

// const h1 = document.createElement("h1");
// h1.textContent = "Jaat Sarkar";
// h1.setAttribute("class","heading");
// div.appendChild(h1);

const div = React.createElement("div",{id:"parent"},
    React.createElement("h1",{id:"heading"},
        React.createElement("p",{id:"paragraph"},"Hypr Jaat")
    ));
console.log(div);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(div);
