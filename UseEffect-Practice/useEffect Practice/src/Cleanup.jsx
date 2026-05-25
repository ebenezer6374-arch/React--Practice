import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleClick = (event) => {
      console.log("Window clicked");
      console.log("X Position:", event.clientX);
      console.log("Y Position:", event.clientY);
    };

    window.addEventListener("click", handleClick);

    // Cleanup Function
    return () => {
      window.removeEventListener("click", handleClick);
      console.log("Event Listener Removed");
    };
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>React Cleanup Example</h1>
      <p>Click anywhere on the window.</p>
      <p>Open console to see the output.</p>
    </div>
  );
}