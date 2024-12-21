import "@fontsource/inter";
import "./App.css";
import Layout from "./components/Layout";
import { ProfileProvider } from "./pages/ProfileContext";
import { DataProvider } from "./pages/DataContext"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <ProfileProvider>
      <DataProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </DataProvider>
    </ProfileProvider>
  );
}

export default App;
