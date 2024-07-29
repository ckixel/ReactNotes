import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Notes from "./pages/notespage/NotesPage";
import Note from "./pages/notepage/NotePage";
import About from "./pages/aboutpage/AboutPage";

function App() {
  document.onmousedown = (e) => {
    if (e.button === 1) {
      document.body.style.backgroundColor = "rgba(50, 50, 50)";
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/notes" className="navbar__item">Notes</Link>
          <Link to="/about" className="navbar__item">About</Link>
        </div>
        <Routes>
          <Route path="notes" element={<Notes />}/>
          <Route path="notes/:title" element={<Note />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<Navigate to="/notes" replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
