import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyFooter from "./assets/components/MyFooter";
import NavBar from "./assets/components/NavBar";
import MainNetflix from "./assets/components/MainNetflix";
import MovieDetails from "./assets/components/MovieDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainNetflix />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
