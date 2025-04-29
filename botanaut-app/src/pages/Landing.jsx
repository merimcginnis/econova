import TypeIt from "typeit-react";
import Button from 'react-bootstrap/Button';
import Logo from '../components/Logo';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('Logged in!', data);
      navigate('/home');
    }

    setLoading(false);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('Signed up!', data);
      navigate('/home');
    }

    setLoading(false);
  }

  function continueAsGuest() {
    navigate('/home');
  }

  return (
    <div className="bg-brand-primary" style={{ position: 'relative' }}>
      <div className="landing-logo">
        <Logo />
      </div>

      <div className="landing-content">
        {/* TypeIt Animation */}
        <TypeIt as="p" options={{ speed: 20, cursor: false }}>
          [Accessing Earth Status Report…]
        </TypeIt>

        <TypeIt as="p" options={{ speed: 20, startDelay: 2000, cursor: false }}>
          SYSTEM LOG: Climate instability detected.
        </TypeIt>

        <TypeIt as="p" options={{ speed: 20, startDelay: 4000, cursor: false }}>
          INITIATING: Project EcoNOVA
        </TypeIt>

        <TypeIt as="p" options={{ speed: 20, startDelay: 6000, cursor: false }}>
          Greetings, Cadet. I’m NOVA – your Eco-Companion.
        </TypeIt>

        <TypeIt as="p" options={{ speed: 10, startDelay: 8000, cursor: false }}>
          Our mission: Replace harmful household products with eco-friendly alternatives. Your choices can shift the balance.
        </TypeIt>

        <TypeIt
          as="p"
          options={{
            cursor: true,
            speed: 20,
            startDelay: 13000,
            afterComplete: () => setShowForm(true),
          }}
        >
          Ready to launch and start swapping?
        </TypeIt>

        {showForm && (
          <>
            <form onSubmit={handleLogin} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--brand-secondary)' }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--brand-secondary)' }}
              />

              <Button type="submit" className="mission-button" variant="outline-light" disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'}
              </Button>

              <Button
                variant="outline-light"
                className="mission-button-outline"
                onClick={handleSignUp}
                style={{ marginTop: '1rem' }}
              >
                Sign Up
              </Button>

              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            <div style={{ marginTop: '1rem' }}>
              <Button
                variant="outline-light"
                className="mission-button-outline"
                onClick={continueAsGuest}
              >
                Continue as Guest
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}