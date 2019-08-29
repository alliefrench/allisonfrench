import React from 'react';
import { Post } from './index';

const image = 'code.jpeg';
const headline = '10 Things I Love About Coding';
const date = 'August 28, 2019';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut. Augue eget arcu dictum varius duis.';

const Posts = () => {
  return (
    <div className="posts_page">
      <div className="posts_page_column">
        <div className="posts_callout">Musings about tech and life in NYC</div>
        <Post image={image} title={headline} date={date} body={text} />
      </div>
    </div>
  );
};

export default Posts;
