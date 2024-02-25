const myName = React.createElement("h1",{id:"heading"},"My name is Shreyansh");

const parent = React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "children"}, 
    React.createElement("h1",{},"This is my only heading")));

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("myName", root);
root.render(parent);