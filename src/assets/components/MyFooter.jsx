import { Col, Container, Row, Button } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer className="text-light pt-5 mb-0 bg-dark ">
      <Container fluid>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} sm={8}>
            <div className="d-flex mb-3 gap-3">
              <Facebook />
              <Instagram />
              <Telegram />
              <Twitter />
              <Youtube />
            </div>
            <Row className="g-3 mb-3">
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Audio and Subtitles
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Media Center
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Privacy
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Contact Us
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Help Center
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Jobs
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Cookie Performances
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Gift Cards
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Terms of Use
                </a>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <a href="#" className="text-decoration-none text-secondary">
                  Corporate Information
                </a>
              </Col>
            </Row>
            <div className=" d-flex flex-column align-items-start">
              <Button className="service text-secondary border border-1 rounded-0 mb-3 bg-dark">
                Service Code
              </Button>
              <div className="d-flex align-items-center fs-6">
                <p className="pb-2 text-secondary ">
                  &copy; 1997-2019 Netflix, Inc.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
