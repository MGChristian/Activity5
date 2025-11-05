import "./App.css";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { useAuth } from "./contexts/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute"; // adjust path

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";

function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog/:blogId" element={<Blog />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
