import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from '../common/NavBar';
import PostsPage from './Post';
import CommentsPage from './Comment';
import AlbumsPage from './Album';
import PhotosPage from './Photo';
import UsersPage from './User';
import TodosPage from './Todo';

function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/comments/:postId" element={<CommentsPage />} />
      <Route path="/albums" element={<AlbumsPage />} />
      <Route path="/photos/:albumId" element={<PhotosPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/todos/:userId" element={<TodosPage />} />
      {/* Define other routes similarly */}
    </Routes>
  </Router>
  );
}

export default App;
