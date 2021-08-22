import React from "react";
import { connect } from "react-redux";

import { FaQuoteLeft } from "react-icons/fa";

import QuoteService from "../../services/quote.service";

import { setLoaderStatus } from "../../redux/loader/loader.actions";
import { setQuoteText, setQuoteAuthor } from "../../redux/quote/quote.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./quote-container.styles.scss";

const QuoteContainer = ({ setLoaderStatus, setQuoteText, setQuoteAuthor, quoteText, quoteAuthor, }) => {
  const changeQuote = () => {
    const fetchQuote = QuoteService();

    fetchQuote
      .then((quote) => {
        setLoaderStatus(false);
        setQuoteText(quote.quoteText);
        setQuoteAuthor(quote.quoteAuthor);
      })
      .catch((error) => {
        setLoaderStatus(false);
        setQuoteText('Sorry, please try again :)');
        setQuoteAuthor('admin');
      });
  };

  const handleClick = () => {
    setLoaderStatus(true);

    changeQuote();
  };

  return (
    <div className="quote-container">
      <div className="quote-text">
        <span className="quote">
          <FaQuoteLeft />
        </span>
        {quoteText}
      </div>

      <div className="quote-author">{quoteAuthor}</div>

      <div className="button-container">
        <CustomButton onClick={() => handleClick()}>New Quote</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quoteText: state.quote.quoteText,
  quoteAuthor: state.quote.quoteAuthor,
});

const mapDispatchToProps = (dispatch) => ({
  setLoaderStatus: (quote) => dispatch(setLoaderStatus(quote)),
  setQuoteText: (quote) => dispatch(setQuoteText(quote)),
  setQuoteAuthor: (quote) => dispatch(setQuoteAuthor(quote))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);
