import React from 'react';
import Post from './Post';

function Posts({ posts, handlePostDelete, handlePostArchive }) {
  return (
    <main className="posts">
      <h2>Записи</h2>
      <div className="posts-container">
        {posts.map((post, index) => (
          <Post key={index} post={post} onDelete={handlePostDelete} onArchive={handlePostArchive} />
        ))}
      </div>
    </main>
  );
}

export default Posts;