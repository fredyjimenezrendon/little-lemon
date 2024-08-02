import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

function App() {
  return (
    <Router>
      <div>
        <h1>Little Lemon App setup</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;