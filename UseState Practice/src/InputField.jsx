import React from 'react'
import { useState } from "react"
function InputField() {
  const [name, setName] = useState("")
  // console.log(setName)
  // console.log(name)
  return (
    <div>
      <input type="text"
        placeholder="Enter your Good Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>
        {name}
      </h1>
    </div>
  )
}
export default InputField