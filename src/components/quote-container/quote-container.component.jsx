import React from 'react';
import { connect } from 'react-redux';

import { FaQuoteLeft } from 'react-icons/fa';

import ButtonContainer from '../button-container/button-container.component';

import './quote-container.styles.scss';

const QuoteContainer = ({quoteText, quoteAuthor}) => (
  <div className='quote-container'>
      <div className='quote-text'>
        <span className='quote'><FaQuoteLeft /></span>
        {quoteText}
      </div>

      <div className='quote-author'>
        {quoteAuthor}
      </div>

      <ButtonContainer />
  </div>
);

const mapStateToProps = state => ({
  quoteText: state.quote.quoteText,
  quoteAuthor: state.quote.quoteAuthor
});

export default connect(mapStateToProps)(QuoteContainer);
