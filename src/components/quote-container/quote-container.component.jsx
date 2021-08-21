import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import ButtonContainer from '../button-container/button-container.component';

import './quote-container.styles.scss';

const QuoteContainer = () => (
  <div className='quote-container'>
      <div className='quote-text'>
        <span className='quote'><FaQuoteLeft /></span>
        What you are is what have been
      </div>

      <div className='quote-author'>
        Buddha
      </div>

      <ButtonContainer />
  </div>
);

export default QuoteContainer;
