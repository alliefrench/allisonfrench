import React from 'react';

const Content = props => {
  const { headline, body, link } = props;

  return (
    <div className="content body_flex_horz">
      <div className="content_headline">{headline}</div>
      <div className="content_body">{body}</div>
      <div className="content_button body_flex_horz">
        <a href={link}>More</a>
      </div>
    </div>
  );
};

export default Content;
