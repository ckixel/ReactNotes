import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import classes from "./NotePage.module.css";

function Note() {

    const { title } = useParams();
    const notes = JSON.parse(localStorage.getItem("notes"));
    const text = notes.find((n) => n.title === title).text;
    const noteBodyRef = useRef();

    return (
        <div className={classes.note}>
            <h1 title={title} className={classes.note__title}>{title}</h1>
            <textarea rows={text.split("\n").length} ref={noteBodyRef} defaultValue={text} className={classes.note__body} onLoad={(e) => {e.target.rows = e.target.value.split("\n").length}} onChange={(e) => {e.target.rows = e.target.value.split("\n").length; localStorage.setItem("notes", JSON.stringify(notes.map((n) => (n.title === title ? {title: title, text: e.target.value} : n))))}}/>
        </div>
    );
}

export default Note;