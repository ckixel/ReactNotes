import React from "react";
import classes from "./MyInput.module.css";
import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
    return (
        <input ref={ref} {...props} className={classes.myInput}/>
    );
});

export default MyInput;