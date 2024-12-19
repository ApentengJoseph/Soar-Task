import "@fontsource/inter";
import './App.css'
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
