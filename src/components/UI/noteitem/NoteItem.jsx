import React from "react";
import classes from "./NoteItem.module.css";
import MyButton from "../button/MyButton";

const NoteItem = ({ note }) => {
    return (
        <div className={classes.note} id="note">
            <div className={classes.note__container}>
                <div className={classes.note__content}>
                    <h4 className={classes.note__title}>{note.title}</h4>
                    <p className={classes.note__text}>{note.text}</p>
                </div>
                <div className={classes.note__buttons}>
                    <MyButton onClick={() => note.openNote(note.title)}>Open</MyButton>
                    <MyButton onClick={() => note.removeNote(note.title)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
}

export default NoteItem;