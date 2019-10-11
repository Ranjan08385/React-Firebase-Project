import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectDetails = props => {
  // console.log(props);
  // console.log(props.match.params.id);
  const id = props.match.params.id;
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

export default ProjectDetails;
