import React from 'react'
import { useState } from "react"
function TextLength() {
    const [text, setText] = useState("")
    function handleChange(e) {
        setText(e.target.value);
    }
    const textLengthWithoutSpaces = text.replace(/\s/g, "").length
    return (
        <div>
            <input type="text"
                placeholder='Type something'
                value={text}
                onChange={handleChange}
            />
            <p>Text : {text}</p>
            <p>Character : {textLengthWithoutSpaces}</p>
        </div>
    )
}
export default TextLength