import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Objectives from "./pages/Objectives";
import Gallery from "./components/Gallery";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageMembers from "./pages/ManageMembers";
import ManageGallery from "./pages/ManageGallery";
import ManageContact from "./pages/ManageContact";
import ManageAbout from "./pages/ManageAbout";
import ManageDonation from "./pages/ManageDonation";
import ManageSettings from "./pages/ManageSettings";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("admin");

  if (isAdmin !== "true") {
    return <Navigate to="/admin-login" />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/members"
          element={
            <ProtectedRoute>
              <ManageMembers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <ManageGallery />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/about"
          element={
            <ProtectedRoute>
              <ManageAbout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/contact"
          element={
            <ProtectedRoute>
              <ManageContact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/donation"
          element={
            <ProtectedRoute>
              <ManageDonation />
            </ProtectedRoute>
          }
        />

        <Route
  path="/admin/settings"
  element={
    <ProtectedRoute>
      <ManageSettings />
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;