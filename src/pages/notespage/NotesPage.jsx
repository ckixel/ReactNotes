import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteList from "../../components/UI/notelist/NoteList";

function Notes() {
  const [text, setText] = useState("Text 3");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const router = useNavigate();
  
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")) || [])
    setLoading(false)
  }, [])

  const addNote = ({title, text}) => {
    console.log(title, text)
    if(!title || !text) return
    if(notes.find((n) => n.title === title)) return
    setNotes([{title: title, text: text}, ...notes])
    localStorage.setItem("notes", JSON.stringify([{title: title, text: text}, ...notes]))
  }

  const removeNote = (title) => {
    setNotes(notes.filter((n) => n.title !== title))
    localStorage.setItem("notes", JSON.stringify(notes.filter((n) => n.title !== title)))
  }

  const openNote = (title) => {
      //window.location.href = `/notes/${title}`
      router(`/notes/${title}`)
  }

  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h1 style={{fontSize: "100px", fontWeight: "bold", margin: "20px"}}>Notes</h1>
      </div>
      <NoteList notes={notes} addNote={addNote} removeNote={removeNote} openNote={openNote} loading={loading}/>
    </div>
  );
}


export default Notes;