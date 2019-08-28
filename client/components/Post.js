import React from 'react';

const Post = props => {
  const { headline, date, body } = props;

  return (
    <div className="post">
      <div className="post_headline">{headline}</div>
      <div className="post_date">{date}</div>
      <div className="post_body">{body}</div>
    </div>
  );
};

export default Post;
