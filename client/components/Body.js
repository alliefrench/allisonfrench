import React from 'react';
import { Content, About } from './index';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut. Augue eget arcu dictum varius duis.';

const Body = () => {
  return (
    <div className="body_container hero">
      <About />
      <div className="body_content body_flex_horz">
        <Content
          image={'square.png'}
          headline="Crafting, Online and Off"
          body={text}
          link="/posts"
        />
        <Content
          image={'code.jpeg'}
          headline="10 Things I love about Coding"
          body={text}
          link="http://quiltb.herokuapp.com/design/"
        />
        <Content
          headline="Headline Three"
          body={text}
          link="http://quiltb.herokuapp.com/design/"
        />
      </div>
    </div>
  );
};
export default Body;
