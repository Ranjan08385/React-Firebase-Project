import React from "react";

const ProjectDetails = ({ projects }) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>{projects.id}</p>
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
