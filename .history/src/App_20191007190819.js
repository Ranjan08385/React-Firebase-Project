import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layouts/Navbar";
import Dashboard from "./Components/dashboard/Dashboard";
import ProjectDetails from "./Components/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
