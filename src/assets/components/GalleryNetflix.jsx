import { Col, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GalleryNetflix = ({ Movies }) => {
    const navigate = useNavigate();

    return (
        <Row className="g-2">
            {Movies.map((movie) => (
                <Col key={movie.imdbID} xs={6} sm={4} md={3}>
                <Card>
                    <Card.Img variant="top" src={movie.Poster} onClick={() =>{
                        navigate("/MoviesDetails/" + movie.imdbID);
                    }} ClassName ="img-fluid rounded- h-100 w-100"
                    >
                        
                    </Card>
                </Card>
                </Col>
            ))}
        </Row>
    );
};

export default GalleryNetflix;
