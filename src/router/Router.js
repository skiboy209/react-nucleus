import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import About from "../components/About";
import Table from "../components/Table";
import Legal from "../components/Legal";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import Header from "../header";
import Footer from "../footer"

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route  path="/posts" component={Posts} />
        <Route  path="/about" component={About} />
        <Route  path="/table" component={Table} />
        
        <Footer />
        <Route  path="/legal" component={Legal} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/privacy" component={Privacy} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
