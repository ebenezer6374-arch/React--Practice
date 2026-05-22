import { useState } from "react"
function ToggleButton() {
  const [isOn, setIsOn] = useState(false)
  function handleToggle() {
    setIsOn(prev => !prev)
  }
  return (
    <button onClick={handleToggle}>
      {isOn ? "On" : "Off"}

    </button>

  )
}
export default ToggleButton;