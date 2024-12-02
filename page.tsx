"use client"

import { useState } from "react"
import SavingsTracker from "./savings-tracker"
import Login from "./login"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (username: string, password: string) => {
    // In a real application, you would validate the credentials against a backend
    // For this example, we'll use a simple check
    if (username === "kid" && password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid username or password")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return isLoggedIn ? <SavingsTracker onLogout={handleLogout} /> : <Login onLogin={handleLogin} />
}

