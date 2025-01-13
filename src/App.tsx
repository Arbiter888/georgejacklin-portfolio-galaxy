import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Blogs from "./pages/Blogs";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/layouts/AdminLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;