import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Auth from "@/pages/Auth"
import ProtectedRoute from "@/components/ProtectedRoute"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <div>Admin Dashboard (Coming Soon)</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App