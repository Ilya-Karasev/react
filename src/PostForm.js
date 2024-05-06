import React, { useState } from 'react';
import Archive from './Archive';

function PostForm({ onSubmit, archivedPosts }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    content: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', category: '', author: '', content: '' });
  };

  return (
    <aside className="form-container">
      <h2>Создать запись</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Автор</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </div>
        <div className="form-section">
          <label>Заголовок</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-section">
          <label>Категория</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div className="form-section">
          <label>Содержание</label>
          <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
        </div>
        <button className='form-button' type="submit">Создать</button>
      </form>
      <br></br>
      <Archive archivedPosts={archivedPosts} />
    </aside>
  );
}

export default PostForm;