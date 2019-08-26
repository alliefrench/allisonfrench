import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="hello">Hello, world!</div>
      <br />
      <br />
      <div>
        Welcome and thank you for your interest in my work. I am a New York
        City-based software engineer with training in fullstack web development.
        I am a collaborative worker with solid soft skills built over the course
        of a decade working in advertising/media planning. I developed a passion
        for coding over the past couple years, finding it to be a great
        extension of my love for creating new things.
        <br />
        <br />
        My tech stack includes React, Redux, Node.js, Express, Sequelize and
        Postgres, in addition to HTML5/CSS3 and Sass.
      </div>
      <div className="stack body_flex_horz">
        <i className="fab fa-react" />
        <i className="fab fa-node-js" />
        <i className="fab fa-html5" />
        <i className="fab fa-css3" />
        <i className="fab fa-sass" />
      </div>
    </div>
  );
};

export default About;
