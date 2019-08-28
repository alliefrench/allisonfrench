import React from 'react';

const Project = props => {
  const { image, projectName, launched, about } = props;

  return (
    <div className="post">
      <img className="post_image" src={image} />
      <div className="post_headline">{projectName}</div>
      <div className="post_date">{launched}</div>
      <div className="post_body">{about}</div>
    </div>
  );
};

export default Project;
