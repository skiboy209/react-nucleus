import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from "./router/Router.js"
import "index.scss";


/*let HelloWorld = () => {
  return (
    
     );
}*/

ReactDOM.render(
    <Router>
        <ReactRouter/>
    </Router>,
  document.getElementById("root")
);
