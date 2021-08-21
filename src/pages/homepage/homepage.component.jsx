import React from 'react';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='home-container'>
    <div className='quote-container' id='quote-container'>
      <div className='quote-text'>
        <span id='quote'>What you are is what have been.</span>
      </div>

      <div className='quote-author'>
        <span id='author'>Buddha</span>
      </div>

      <div className='button-container'>
        <button>Twitter</button>
      </div>
    </div>
  </div>
);

export default Homepage;