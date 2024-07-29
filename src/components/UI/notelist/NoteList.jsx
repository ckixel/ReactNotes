import React, { useState, useRef } from "react";
import MyButton from "../button/MyButton";
import Modal from "../modal/MyModal";
import NoteItem from "../noteitem/NoteItem";
import MyInput from "../input/MyInput";

const NoteList = ({ notes, addNote, removeNote, openNote, loading }) => {

    const [modal, setModal] = useState(false);
    const titleInputRef = useRef();
    const bodyInputRef = useRef();
    const [search, setSearch] = useState("");

    const searchedNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <MyButton onClick={() => setModal(true)}>Add note</MyButton>
            <MyInput value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search"/>
            <Modal visible={modal} setVisible={setModal}>
                <h2>Add note</h2>
                <MyInput ref={titleInputRef} type="text" placeholder="Title" />
                <MyInput ref={bodyInputRef} type="text" placeholder="Text" />
                <MyButton onClick={() => {console.log(titleInputRef); addNote({title: titleInputRef.current.value, text: bodyInputRef.current.value}); setModal(false)}}>Add note</MyButton>
            </Modal>
            {searchedNotes.length || loading
            ?
            searchedNotes.map((note) => (
                <NoteItem note={{...note, removeNote: removeNote, openNote: openNote}} key={note.title}/>
            ))
            :
            <h3 style={{fontSize: "30px", fontWeight: "bold"}}>No notes</h3>
            }
        </div>
    );
}

export default NoteList;