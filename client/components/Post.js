import React from 'react';

const Post = props => {
  const { image, title, date, body } = props;

  return (
    <div className="post">
      <img className="post_image" src={image} />
      <div className="post_headline">{title}</div>
      <div className="post_date">{date}</div>
      <div className="post_body">{body}</div>
    </div>
  );
};

export default Post;
