import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import { css } from '@emotion/react';
import { PropagateLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={'#3d2514'}
          Loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <div>
          <Navbar />
          <Header />
          {/* <Menu /> */}
          {/* <About />
          <Contact />  */}
        </div>
      )}
    </div>
  );
};

export default App;
