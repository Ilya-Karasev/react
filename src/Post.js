import React from 'react';

function Post({ post, onDelete, onArchive }) {
  return (
    <article className='post'>
      <h3>{post.title}</h3>
      <p>Категория: <strong>{post.category}</strong></p>
      <p>Автор: <strong>{post.author}</strong></p>
      <p>{post.content}</p>
      <div className="post-buttons">
        <button onClick={() => onDelete(post)} style={{ backgroundColor: '#cf3a15' }}>Удалить</button>
        <button onClick={() => onArchive(post)} style={{ backgroundColor: '#A3AE9E' }}>Архив</button>
      </div>
    </article>
  );
}

export default Post;