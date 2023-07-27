const heading  = React.createElement("h1",{},"Hello World!");

const parent =  React.createElement("div",{id : "parent"}, [
    React.createElement("div",{id:"Child1"}, 
[
    React.createElement("h1",{},"Hello World!"),
    React.createElement("h2",{},"Hello World!")
]),
React.createElement("div",{id:"Child2"}, 
[
    React.createElement("h3",{},"Hello World!"),
    React.createElement("h4",{},"Hello World!")
])
]);

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);