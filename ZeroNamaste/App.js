/*
  <div id="parent">
   <div id="child">
    <h1>Hi i am heading</h1>
   </div>
  </div>

  Let's create this structure with react
 */
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hi i am heading"),
          React.createElement("h1",{},"Hi i am heading2")])
        );


const heading = React.createElement("h1",{id:"heads"},"Namaste World");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);