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

  loadGallery = () => {
    this.fetchMovies("Dragon ball")
      .then((HarryPotterMovies) => {
        this.setState({ HarryPotter: HarryPotterMovies });
      })
      .catch((error) =>
        console.error("Error fetching Dragon ball movies:", error)
      );
    this.fetchMovies("lord of the rings")
      .then((LordRingsMovies) => {
        this.setState({ LordOfRings: LordRingsMovies });
      })
      .catch((error) =>
        console.error("Error fetching Lord of the Rings movies:", error)
      );
    this.fetchMovies("star wars")
      .then((starwarsMovies) => {
        this.setState({ StarWars: starwarsMovies });
      })
      .catch((error) =>
        console.error("Error fetching Star Wars movies:", error)
      );
  };

  componentDidMount() {
    this.loadGallery();
  }

  render() {
    return (
      <>
        <MainNetflix title="Dragon ball" movies={this.state.DragonBall} />
      </>
    );
  }
}

export default MainNetflix;
