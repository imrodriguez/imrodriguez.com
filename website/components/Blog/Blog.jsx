import React from 'react'
import { PostCard } from './Blog.styles';

const Blog = (props) => (
  <div className="BlogWrapper">
    {props.posts.map((post, index) => {
      return (
        <PostCard>
          <p key={index}>{post.created}</p>
          <p key={index}>{post.title}</p>
          <img src={post.image} alt={post.title} />
        </PostCard>
      )
    })}
  </div>
)

export default Blog
