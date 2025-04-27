import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Ecoswap() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=ApgJMMgkDXa6vc5DnhK0pfk9xwOQOUchbQhBcgN4`);
        const data = await res.json();
        setApodData(data);
      } catch (err) {
        console.error('Error fetching the APOD data:', err);
      }
    };

    fetchApod();
  }, []);

  if (!apodData) {
    return <div className="text-center" style={{ color: 'white' }}>Loading NASA data...</div>;
  }

  return (
    <div className="ecoswap-bg"  style={{ paddingBottom: '100px' }}>
      <Container className="text-center">
        {/* Intro Text Section */}
        <Row className="align-items-center mt-5 pt-5">
          <Col>
            <h1 className="font-spacemono" style={{ color: 'white' }}>
              Why We Integrated NASA's APOD API into EcoSwap:
            </h1>
            <p style={{ color: 'white', marginTop: '20px' }}>
              EcoSwap is about more than just making sustainable swaps. It is about inspiring a sense of connection to the planet and beyond. 
              By featuring NASA’s Astronomy Picture of the Day, we are reminded daily of the beauty of the universe and the importance of taking care of our home, Earth.
            </p>
          </Col>
        </Row>

        {/* APOD*/}
        <Row className="align-items-center mt-5">
          <Col md={6}>
            {apodData.media_type === "image" ? (
              <img
                src={apodData.url}
                alt={apodData.title}
                style={{ width: "80%", borderRadius: "10px" }}
              />
            ) : (
              <iframe
                title="space-video"
                src={apodData.url}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                style={{ width: "100%", height: "400px", borderRadius: "10px" }}
              ></iframe>
            )}
          </Col>

          <Col md={6}>
            <h2 style={{ color: 'white', textAlign: 'left', marginBottom: '20px' }}>{apodData.title}</h2>
            <p style={{ color: 'white', textAlign: 'left' }}>{apodData.date}</p>
            <p style={{ color: 'white', textAlign: 'left', marginTop: '20px' }}>
              {apodData.explanation}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
