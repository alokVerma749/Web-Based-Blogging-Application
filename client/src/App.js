import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MyBlogs from './pages/user/MyBlogs'
import NotFound from './pages/NotFound'
import Editor from './pages/user/Editor';
import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={user ? <MyBlogs /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/user/createblog"
          element={user ? <Editor /> : <Navigate to="/auth" />}
        />
        <Route
          path="*"
          element={user ? <NotFound /> : <Navigate to="/auth" />}
        />
      </Routes>
    </>

  );
}

export default App;
