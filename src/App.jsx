import { Routes, Route } from "react-router-dom"
import Home from "./components/Welcome"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
    </>
  )
}

export default App