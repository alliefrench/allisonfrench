import React from 'react';
import { Post } from './index';

const image = 'square.png';
const projectName = 'quilt-B';
const launched = 'May 2019';
const about =
  'I created quilt-B as a design tool to assist in the visualization of quilt projects.  It allows users to create and save designs,and see how they would look expanded into a multiple-square blanket. I am continuing to plan and build new features, such as a notebook area for ideas and links to fabrics. quilt-B was the winner in the category of best design in the Grace Hopper Stackathon in April 2019. Stack: Node.js, React, Redux, Konva.js, Express, Sequelize, Postgres; Styling: CSS/Flexbox';

const Projects = () => {
  return (
    <div className="posts_page">
      <div className="posts_page_column">
        <div className="posts_callout">My Code Babies. </div>
        <Post image={image} title={projectName} date={launched} body={about} />
      </div>
    </div>
  );
};

export default Projects;
