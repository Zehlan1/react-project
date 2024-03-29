import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../common/NavBar";
import PostsPage from "./PostsPage";
import CommentsPage from "./CommentsPage";
import AlbumsPage from "./AlbumsPage";
import PhotosPage from "./PhotosPage";
import UserPage from "./UserPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/comments/:postId" element={<CommentsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/photos/:albumId" element={<PhotosPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
