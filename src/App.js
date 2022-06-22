import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BeatLoader
          color={'#750512'}
          Loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <div>
          <Navbar />
          <Header />
          <About />
          <Menu />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
