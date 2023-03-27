import React from "react";

const Alert = props => {
    const capitalize = word => {
        if (word === "danger") {
            word = "error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    //If props.alert exist then we will simply display the type and message of our alert
    return (
        <div >
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
                >
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
};

export default Alert;