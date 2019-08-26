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
          headline="Headline One"
          subhead="This is a subhead"
          body={text}
          link="http://quiltb.herokuapp.com/design/"
        />
        <Content
          headline="Headline Two"
          subhead="What do you think?"
          body={text}
          link="http://quiltb.herokuapp.com/design/"
        />
        <Content
          headline="Headline Three"
          subhead="Take this action now."
          body={text}
          link="http://quiltb.herokuapp.com/design/"
        />
      </div>
    </div>
  );
};
export default Body;
