import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MyBlogs from './pages/user/MyBlogs'
import NotFound from './pages/NotFound'
import Editor from './pages/user/Editor.js';
import { AuthContext } from './contexts/AuthContext.js';
import { useContext, useEffect } from 'react'

function App() {
  const { login, dispatch } = useContext(AuthContext)
  const checkAuth = async () => {
    try {
      const response = await fetch('/auth/auth-status');
      const data = await response.json();
      if (data.status === true) {
        await dispatch({
          type: 'LOGIN',
          payload: {
            login: data.status,
            name: data.name
          }
        })
      } else {
        await dispatch({
          type: 'LOGIN',
          payload: {
            status: data.status,
            name: data.name
          }
        })
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    checkAuth()
    console.log('i ran ' + login)
  }, [login])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={login ? <MyBlogs /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!login ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/login"
          element={!login ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/user/createblog"
          element={login ? <Editor /> : <Navigate to="/auth" />}
        />
        <Route
          path="*"
          element={login ? <NotFound /> : <Navigate to="/auth" />}
        />
      </Routes>
    </>
  );
}

export default App;
