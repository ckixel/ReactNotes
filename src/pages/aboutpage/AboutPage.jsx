import React from "react";
import classes from "./AboutPage.module.css";

function About() {
    return (
        <div className={classes.about}>
            <h1 className={classes.about__title}>This is website for notes</h1>
            <p className={classes.about__body}>There you can create, edit and delete notes</p>
        </div>
    );
}

export default About;