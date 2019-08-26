import React from 'react';

const Content = props => {
  const { headline, subhead, body, link, image } = props;

  return (
    <div className="content body_flex_horz">
      <img className="content_image" src={image} />
      <div className="content_headline">{headline}</div>
      <div className="content_subhead">{subhead}</div>
      <div className="content_body">{body}</div>
      <div className="content_button body_flex_horz">
        <a href={link}>More >></a>
      </div>
    </div>
  );
};

export default Content;
