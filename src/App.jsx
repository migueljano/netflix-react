// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyFooter from "./assets/components/MyFooter";
import NavBar from "./assets/components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <MyFooter />
    </Router>
  );
}

export default App;
