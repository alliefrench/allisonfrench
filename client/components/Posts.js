import React from 'react';
import { Post } from './index';
import axios from 'axios';

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
