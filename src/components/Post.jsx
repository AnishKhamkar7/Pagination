import React from "react";

function Post({ posts, loading }) {
  if (loading) {
    <h2>loading...</h2>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
