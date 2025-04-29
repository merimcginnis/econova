import { ProgressBar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar';

export default function Planet() {
  const progress = 0;

  return (    
    <div className="planet-bg">
      <Navbar />
      <div>
          <Container>
          <Row>
            <Col>
              <img className="nova3" src="/images/nova-3.svg"/>
            </Col>
            <Col>
              <img className="planethead" src="/images/planet1.svg"/>
            </Col>
            <Col className="planet-description">
              <p>You’ve landed here — for now!</p>
              <p>Each planet in the galaxy marks a new stage in your eco-swapping adventure. As you make more sustainable choices, you’ll journey from one world to the next, discovering new environments and unlocking new planetary upgrades.</p>
            </Col>
          </Row>
          <Row className="planets-row">
            <Col>
              <img className="planet-1" src="/images/planet-1.svg"/>
              <img className="planet-1" src="/images/planet-2.svg"/>
              <img className="planet-1" src="/images/planet-3.svg"/>
              <img className="planet-1" src="/images/planet-4.svg"/>
            </Col>
          </Row>
          <Row className="status">
            <Col className="unlocked">
              <p>UNLOCKED</p>
            </Col>
            <Col className="unlocked">
              <p>UNLOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
          </Row>
          <Row className="planets-row">
            <Col>
              <img className="planet-1" src="/images/planet-5.svg"/>
              <img className="planet-1" src="/images/planet-6.svg"/>
              <img className="planet-1" src="/images/planet-7.svg"/>
              <img className="planet-1" src="/images/planet-8.svg"/>
            </Col>
          </Row>
          <Row className="status">
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
          </Row>
          <Row className="planets-row">
            <Col>
              <img className="planet-1" src="/images/planet-9.svg"/>
              <img className="planet-1" src="/images/planet-10.svg"/>
              <img className="planet-1" src="/images/planet-11.svg"/>
              <img className="planet-1" src="/images/planet-12.svg"/>
            </Col>
          </Row>
          <Row className="status">
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
            <Col>
              <p>LOCKED</p>
            </Col>
          </Row>
          <Row className="planet-caption">
            <h1>A better planet starts with a better product</h1>
          </Row>
        </Container>
      </div>
    </div>
);
}