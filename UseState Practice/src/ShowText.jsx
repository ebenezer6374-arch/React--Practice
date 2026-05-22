import React from 'react'
import { useState } from "react"
function ShowText() {
    const [show, setShow] = useState(false);
    function handleToggle() {
        setShow(prev => !prev)
    }
    return (
        <div>
            <button
                onClick={handleToggle}>
                {show ? "Hide" : "Show"}
            </button>
            {
                show && (
                    <p>
                        This Paragraph can be hidden and shown
                    </p>
                )
            }
        </div>
    )
}
export default ShowText