import React from "react";

export function Button({ title = "Button", color, borderRadius}) {


    return (
        <button
            onClick={() => {
                confirm(`${title} was clicked!`);
            }}
            className={`mx-auto block my-5 py-2 px-5 ${color} ${borderRadius}`}
            >

        </button>
    );
}




export default Button;