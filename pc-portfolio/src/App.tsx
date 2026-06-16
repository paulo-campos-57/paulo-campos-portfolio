import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </>
  );
}
