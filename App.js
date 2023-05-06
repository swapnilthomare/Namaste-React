/**
 * 
 * <div id="parent">
 *       <div id="child">
 *           <h1>I'am H! tag</h1>
 *           <h1>I'am H! tag</h1>
 *           
 *       <div>
 * 
 * ReactElement(object) => HTML(browser understand)
 */

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"Child1"},
            [React.createElement("h1",{id:"heading"},"hello React tree"),
            React.createElement("h1",{id:"heading2"},"hello sibling 2")]
            
            ),

        React.createElement("div",{id:"Child2"},
                [React.createElement("h1",{id:"heading"},"hello React tree"),
                React.createElement("h1",{id:"heading2"},"hello sibling 2")]
                )
    ]
);



//jsx make all this thing easy 



const heading = React.createElement("h1",
{id:"heading"},
"Hello world from react!"
); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // convert heading object into html tag and pass to browser
root.render(parent); 
console.log(parent);
