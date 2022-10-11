import React from "react"

export default function Button({text, value = "", action}){
    return (
        <button value={value} onClick={(e) => action(Number(e.target.value))}>
            {text}
        </button>
    )
}