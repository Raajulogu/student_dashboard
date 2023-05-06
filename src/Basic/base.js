import React from "react";

function Base({title,content,children}){
    return(
        <div>
            <div className="title">
            <h1>{title}</h1>
            <h3>{content}</h3>
            </div>

            <div className="main-content">{children}</div>
        </div>
    );
}

export default Base;