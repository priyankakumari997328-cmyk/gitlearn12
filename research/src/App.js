import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Projects from "./pages/Projects";
import Progress from "./pages/Progress";
import Faculty from "./pages/Faculty";
import Approve from "./pages/Approve";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={
          <ProtectedRoute role="student">
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/applications" element={<Applications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/progress" element={<Progress />} />

        <Route path="/faculty" element={
          <ProtectedRoute role="faculty">
            <Faculty />
          </ProtectedRoute>
        } />
        <Route path="/approve" element={
          <ProtectedRoute role="faculty">
            <Approve />
          </ProtectedRoute>
        } />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
