import { Component } from "react";
// import { Search } from "react-bootstrap-icons";

class MainNetflix extends Component {
  state = {
    HarryPotter: [],
    Sonic: [],
    DragonBall: [],
  };
  fetchMovies = (Search) => {
    const apikey = "ecc506cc";
    const URL = `https://omdbapi.com/?apikey=${apikey}&s=${Search}`;

    return fetch(URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => data.Search.slice(0, 6))
      .catch((e) => {
        console.log("Errore: ", e);
      });
  };
}

export default MainNetflix;
