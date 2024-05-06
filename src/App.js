import React, { useState } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [archivedPosts, setArchivedPosts] = useState([]);

  const handlePostSubmit = formData => {
    const newPost = { ...formData };
    setPosts([...posts, newPost]);
  };

  const handlePostDelete = postToDelete => {
    setPosts(posts.filter(post => post !== postToDelete));
  };

  const handlePostArchive = postToArchive => {
    setArchivedPosts([...archivedPosts, postToArchive.title]);
    setPosts(posts.filter(post => post !== postToArchive));
  };

  return (
    <div className="App">
      <header>
        <h1>Блог</h1>
      </header>
      <div className="content">
        <Posts posts={posts} handlePostDelete={handlePostDelete} handlePostArchive={handlePostArchive} />
        <PostForm onSubmit={handlePostSubmit} archivedPosts={archivedPosts} />
      </div>
      <footer>
          <p>Курсовая работа по JS.</p>
      </footer>
    </div>
  );
}

export default App;