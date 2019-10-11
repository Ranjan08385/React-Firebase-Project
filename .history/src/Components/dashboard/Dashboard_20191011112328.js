import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "reactRedux";
import { firestoreConnect } from "reactReduxFirebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="Dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.project.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
