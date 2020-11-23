import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./Pages/NavbarTop";
import NavbarBottom from "./Pages/NavbarBottom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Info from "./Pages/Info";

const App = () => {
  return (
    <Router>
      <NavbarTop />
      <NavbarBottom />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  );
};

export default App;
