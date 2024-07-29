import React from "react";
import classes from "./MyButton.module.css";


function Btn({ children, onClick }) {
    return (
        <button className={classes.myButton} onClick={onClick}>
            {children}
        </button>
    );
}

export default Btn;