import React from "react";

function ProjectList(props) {
  return (
    <>
      {props.filterList.map((project, index) => (
        <div
          key={index}
          className="pa4 ma2 grow bw2 shadow-2 pointer"
          onClick={() => props.onRouteChange(project.route)}
        >
          {project.title_name}
        </div>
      ))}
    </>
  );
}
export default ProjectList;
