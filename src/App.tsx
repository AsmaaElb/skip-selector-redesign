import { useEffect } from "react" // ← cette ligne est manquante
import { Routes, Route } from "react-router-dom"
import SkipSelection from "./pages/SkipSelection"
import PermitCheck from "./pages/PermitCheck"

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <Routes>
      <Route path="/" element={<SkipSelection />} />
      <Route path="/permit-check" element={<PermitCheck />} />
    </Routes>
  )
}
