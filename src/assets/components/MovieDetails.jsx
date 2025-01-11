import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const id = params.movieId;
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState(null);

  const fetchDetails = () => {
    const apikey = "f1cd5989";
    const url = `https://www.omdbapi.com/?apikey=${apikey}&i=${id}`;

    return fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setMovieDetails(data);
      })

      .catch((e) => {
        console.log("Errore: ", e);
      });
  };
  //scatena fetchDetails quando c'è un cambio di id
  useEffect(() => {
    if (id) {
      fetchDetails();
    }
  }, [id]);

  return (
    <div className="bg-dark text-light pt-5 mx-auto">
      {movieDetails ? (
        <Container>
          <Row className="mx-auto">
            <Col xs={12} md={5}>
              <img src={movieDetails.Poster} alt={movieDetails.Title} />
            </Col>
            <Col xs={12} md={7}>
              <h1>{movieDetails.Title}</h1>
              <p>{movieDetails.Plot}</p>

              <p className="mt-4">
                <strong>Genre:</strong> {movieDetails.Genre}
              </p>
              <p>
                <strong>Director:</strong> {movieDetails.Director}
              </p>
              <p>
                <strong>Actors:</strong> {movieDetails.Actors}
              </p>
              <p className="pb-5 ">
                <strong>Released:</strong> {movieDetails.Released}
              </p>
              <Button
                className="btn btn-dark border"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner animation="grow" variant="success" className="mx-auto" />
      )}
    </div>
  );
};

export default MovieDetails;
