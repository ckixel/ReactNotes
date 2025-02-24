import React from "react";
import classes from "./MyModal.module.css";

function Modal({children, visible, setVisible}) {

    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.myModalActive);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
