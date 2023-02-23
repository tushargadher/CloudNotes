// import logo from './logo.svg';
import { useState } from "react";
import Navabar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Features from "./Components/Features";
import NoteState from './context/notes/NoteState';
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState({ message: null, flag: null });
  const showAlert = (msg, flg) => {
    setAlert({
      message: msg,
      flag: flg
    })
    setTimeout(() => {
      setAlert({
        message: null,
        flag: null
      })
    }, 2000)
  }
  return (
    <>
      <NoteState>{/*here we wrap all component in NoteState so that all comopnet can use the state of NoteState*/}
        <Router>
          <Navabar />

          <Alert alert={alert} />

          <Routes>
            <Route exact path="/home" element={<Home showAlert={showAlert} />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />

          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
