import React, { Fragment } from "react";

const Project = props => {
  const { imageName, title, description, projectLink } = props;
  return (
    <Fragment>
      <li>
        <a>
        <figure>
          <img src={require(`../images/${imageName}`)} alt="project" />
          <figcaption>
            <h3>{title}</h3>
          </figcaption>
        </figure>
        </a>
        <p>{description}</p>
        {/* <a class="project-links" href={`/${projectLink}`}>
          View Project
        </a> */}
      </li>
    </Fragment>
  );
};

export default Project;
