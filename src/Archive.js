import React from 'react';

function Archive({ archivedPosts }) {
  return (
    <div className="archive">
      <h2>Архив</h2>
      <ol>
        {archivedPosts.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ol>
    </div>
  );
}

export default Archive;