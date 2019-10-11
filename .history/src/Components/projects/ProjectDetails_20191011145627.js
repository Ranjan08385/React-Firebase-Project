import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  // console.log(props);
  // console.log(props.match.params.id);
  const id = props.match.params.id;
  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            In 1975 Gates, then a sophomore at Harvard University in Boston,
            Massachusetts, joined Allen, who was working as a programmer for
            Honeywell near Boston, to write software for the first
            microcomputers, later called PCs. They started by adapting BASIC, a
            popular programming language for large computers.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Microsoft</div>
          <div>4th October, 9am</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
