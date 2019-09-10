import React from 'react';
import { Post } from './index';
import axios from 'axios';

const image = 'code.jpeg';
const headline = '10 Things I Love About Coding';
const date = 'August 28, 2019';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut. Augue eget arcu dictum varius duis.';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    try {
      const postsData = await axios.get('/api/posts');
      const posts = postsData.data;
      posts.sort((a, b) => b.id - a.id);
      console.log(posts);
      this.setState({ posts });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="posts_page">
        <div className="posts_page_column">
          <div className="posts_callout">
            Musings about tech and life in NYC
          </div>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              body={post.body}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
