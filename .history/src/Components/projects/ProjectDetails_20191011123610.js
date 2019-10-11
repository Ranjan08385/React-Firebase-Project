import React from "react";

const ProjectDetails = ({ projects }) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
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
