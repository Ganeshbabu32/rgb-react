const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"this is THAR REACT THAR WORLD"),
React.createElement("h2",{},"this is THAR REACT THAR WORLD")]),
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"this is THAR REACT THAR WORLD"),
React.createElement("h2",{},"this is THAR REACT THAR WORLD")])]
);



//const heading= React.createElement("h1",{id:"heading",abc:"yzx"},"this is REACT THAR WORLD");
console.log(parent);
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent); 

const first=React.createElement('div',{id:"first"},
            React.createElement("div",{id:"second"},
            [React.createElement("h1",{},"this is first one"),
            React.createElement("h2",{},"This is the second one")]));

const roo=ReactDOM.createRoot(document.getElementById("rgb"));
roo.render(first);

