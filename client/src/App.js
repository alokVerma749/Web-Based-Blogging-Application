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
  const { token } = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={token ? <MyBlogs /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/user/createblog"
          element={token ? <Editor /> : <Navigate to="/auth" />}
        />
        <Route
          path="*"
          element={token ? <NotFound /> : <Navigate to="/auth" />}
        />
      </Routes>
    </>

  );
}

export default App;
