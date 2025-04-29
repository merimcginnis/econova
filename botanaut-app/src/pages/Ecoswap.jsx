import { useEffect, useState } from 'react';
import { supabaseEco } from '../supabaseEco';
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EcoSwap() {
  const [swaps, setSwaps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [swapTotal, setSwapTotal] = useState(0);
  const [selectedSwap, setSelectedSwap] = useState(null);
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

  const fetchSwaps = async (search) => {
    setLoading(true);

    const normalizedSearch = search.trim().toLowerCase();
    const singularSearch = normalizedSearch.endsWith('s')
      ? normalizedSearch.slice(0, -1)
      : normalizedSearch;

    const { data, error } = await supabaseEco
      .from('eco alternatives')
      .select('*')
      .or(`item_name.ilike.%${normalizedSearch}%,item_name.ilike.%${singularSearch}%`);

    if (error) {
      console.error('Error fetching swaps:', error);
      setSwaps([]);
    } else {
      setSwaps(data);
    }

    setLoading(false);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      fetchSwaps(searchTerm);
    }
  };

  const handleSelectSwap = (swap) => {
    setSelectedSwap(swap);
  };

  const handleAddToShoppingList = () => {
    if (selectedSwap && !shoppingList.find(item => item.id === selectedSwap.id)) {
      setShoppingList([...shoppingList, selectedSwap]);
      setSwapTotal(prev => prev + 1);
    }
  };

  return (
    <div className="ecoswap-bg">
      <Navbar />

      {/* Top Welcome + Search Section */}
      <div className="ecoswap-1">
        <div className="swap-total">
          Total Swaps Saved: {swapTotal}
        </div>

        <p>
          Welcome to <strong>ECOSWAP</strong>, your personal sustainability guide. 
          Every product we use has a story—how it was made, how much water it used, how much carbon it released. 
          <br /><br />Type in what you use daily (ex. tissues, towels, soap, etc.), and we’ll show you smarter swaps that reduce greenhouse gases, save water, and cut down on plastic waste. 
          Your actions matter. <strong>Make sure to click on the alternative and add to your shopping cart in order to gain green points!</strong>
        </p>

        <div className="ecoswap-search-input">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ecoswap-search-bar"
          />
          <button
            onClick={handleSearch}
            className="ecoswap-button"
          >
            Search
          </button>
        </div>

        <img className="down-arrow" src="/images/down-arrow.svg" alt="Scroll down" />
      </div>

      {/* Swap Results Section */}
      {loading ? (
        <p>Loading swaps...</p>
      ) : swaps.length === 0 ? (
        <p>No swaps found for "{searchTerm}".</p>
      ) : (
        <div className="ecoswap-results-container">
          <div className="ecoswap-options-list">
            {swaps.map((swap) => (
              <div
                key={swap.id}
                className={`ecoswap-card ${selectedSwap?.id === swap.id ? 'selected' : ''}`}
                onClick={() => handleSelectSwap(swap)}
              >
                <h4>{swap.eco_alternative}</h4>
                <p>{swap.description}</p>
              </div>
            ))}
          </div>

          <div className="ecoswap-selected-display">
            {selectedSwap ? (
              <>
                {selectedSwap.image_url && (
                  <img
                    src={selectedSwap.image_url}
                    alt={selectedSwap.eco_alternative}
                    className="selected-swap-image"
                  />
                )}
                <button
                  onClick={handleAddToShoppingList}
                  className="add-to-shopping-list-button"
                >
                  Add to Shopping List
                </button>
              </>
            ) : (
              <p>Select an alternative to view it!</p>
            )}
          </div>
        </div>
      )}

      {/* 🌟 Eco Impact Cards Section */}
      <div className="eco-impact-section">
        <div className="eco-impact-card">
          <img src="/images/iconeconova1.svg" alt="Clear the Cosmic Skies" />
          <h3>Clear the Cosmic Skies</h3>
          <p>Reduce greenhouse gas emissions by choosing low-impact alternatives.</p>
        </div>

        <div className="eco-impact-card">
          <img src="/images/iconeconova2.svg" alt="Preserve Planetary Waters" />
          <h3>Preserve Planetary Waters</h3>
          <p>Conserve freshwater resources by selecting products that use less water to produce.</p>
        </div>

        <div className="eco-impact-card">
          <img src="/images/iconeconova3.svg" alt="Escape the Plastic Nebula" />
          <h3>Escape the Plastic Nebula</h3>
          <p>Cut down on plastic waste with reusable or eco-friendly swaps.</p>
        </div>
      </div>

      {/* NASA APOD Section */}
      {apodData && (
        <Container className="apod-section">
          <Row className="align-items-center mt-5 pt-5">
            <Col>
              <h1 className="font-spacemono" style={{ color: 'white' }}>
                Why We Integrated NASA's APOD API into EcoSwap:
              </h1>
              <p style={{ color: 'white', marginTop: '20px' }}>
                EcoSwap is about more than just making sustainable swaps. It’s about inspiring a sense of connection to the planet and beyond. 
                Featuring NASA’s Astronomy Picture of the Day reminds us daily of the beauty of the universe and the importance of taking care of Earth.
              </p>
            </Col>
          </Row>

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
      )}
    </div>
  );
}