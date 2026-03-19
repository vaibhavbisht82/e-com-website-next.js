"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e:any) => {
    e.preventDefault()

    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem("token", data.token)
      router.push("/products")
    } else {
      alert("Login Failed")
    }
  }

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        {/* LEFT SIDE */}
        <div style={styles.left}>

          <h2 style={styles.logo}>👁️</h2>
          <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
  Xeye Intelligence
</h1>
          <h3>Secure Admin Access</h3>
          <br></br>


          <h3>Sign In</h3>
          <p style={{ color: "#000000" }}>Enter your credentials</p>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={styles.input}
            />

            <div style={styles.options}>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span style={{ color: "#000000", cursor: "pointer" }}>
                Forgot password?
              </span>
            </div>

            <button type="submit" style={styles.button}>
              Sign In
            </button>

          </form>

        </div>

        
        <div style={styles.right}>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
  Admin Dashboard
</h1>
          <p style={{ marginTop: "10px" }}>
            Monitor intelligence, manage operations and gain real-time insights with Xeye's secure web platform.
          </p>

          <div style={styles.features}>
            <span>🔒 Enterprise-grade security</span>
            <span>⚡ Real-time analytics</span>
            <span>☁️ Cloud native platform</span>
            <span>📊 Smart Dashboards</span>
          </div>
        </div>

      </div>

    </div>
  )
}

const styles:any = {

  container: {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('/backgroundimage.jpg')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  },
  card: {
    display: "flex",
    width: "900px",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#d1e4ec",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },

  left: {
    width: "50%",
    color: "black",
    padding: "40px"
  },

  right: {
    width: "50%",
    padding: "40px",
    color: "white",
    background: "linear-gradient(to right, #9f84bd, #2575fc)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  logo: {
  marginBottom: "10px",
  fontSize: "50px"   // 🔥 increase this (try 50px–70px)
},

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "1px solid #020202"
  },

  options: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "14px"
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  },

  features: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  }
}