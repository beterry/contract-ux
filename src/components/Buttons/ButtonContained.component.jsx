import React from 'react'

const buttonStyles = {
    padding: "0 1rem",
    height: "2.25rem",
    display: "flex",
    alignItems: "center",
    background: "#FF8C00",
    border: "none"
}

export default function ButtonContained(props) {
    return (
        <button>
            {props.children}
        </button>
    )
}
