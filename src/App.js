import "./App.css";
import HomePage from "./Pages/HomePage";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Songs from "./Pages/Songs";
import Travel from "./Pages/Travel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
