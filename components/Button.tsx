"use client"

export default function Button({ text, onClick, style }) {
  return (
    <button onClick={onClick} style={{ ...styles.button, ...style }}>
      {text}
    </button>
  )
}

const styles = {
  button: {
    padding: "10px",
    width: "100%",
    border: "none",
    background: "linear-gradient(to right, #2563eb, #7c3aed)",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px"
  }
}