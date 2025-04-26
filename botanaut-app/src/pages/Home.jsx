import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url("/images/NOVA-background-2.svg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'scroll';
  }, []);

  return (
    <div className="home-page">
      <Container className="text-center">
        <Row className="align-items-center mt-5 pt-5">
          <Col>
            <img className="logo" src="/images/logo.svg" alt="EcoNova Logo" />
          </Col>
          <Col>
            <img className="nova-image" src="/images/nova-1.svg" alt="NOVA Avatar" />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <div className="greeting-box">
            Greetings, Cadet
          </div>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <p className="mission-text">
              Join NOVA and the Galactic Greening Initiative on a mission to revive forgotten planets — by making sustainable swaps right here on Earth.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
