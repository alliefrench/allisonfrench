import React from 'react';
import { Content } from './index';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut. Augue eget arcu dictum varius duis. Ipsum dolor sit amet consectetur adipiscing elit. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.';

const Body = () => {
  return (
    <div className="body_content body_flex_horz">
      <Content
        headline="Headline One"
        body={text}
        link="http://quiltb.herokuapp.com/design/"
      />
      <Content
        headline="Headline Two"
        body={text}
        link="http://quiltb.herokuapp.com/design/"
      />
      <Content
        headline="Headline Three"
        body={text}
        link="http://quiltb.herokuapp.com/design/"
      />
    </div>
  );
};
export default Body;
