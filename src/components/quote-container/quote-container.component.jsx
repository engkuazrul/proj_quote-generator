import React from "react";
import { connect } from "react-redux";

import { FaQuoteLeft } from "react-icons/fa";

import QuoteService from "../../services/quote.service";
import { setQuoteText, setQuoteAuthor, resetQuote } from "../../redux/quote/quote.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./quote-container.styles.scss";

class QuoteContainer extends React.Component {

  changeQuote = () => {
    const {setQuoteText, setQuoteAuthor, resetQuote} = this.props;

    const fetchQuote = QuoteService();

    fetchQuote
      .then((quote) => {
        setQuoteText(quote.quoteText);
        setQuoteAuthor(quote.quoteAuthor);
      })
      .catch((error) => {
        resetQuote();
      });
  }

  componentDidMount = () => {
    this.changeQuote();
  }

  handleClick = () => {
    this.changeQuote();
  };

  render(){
    const {quoteText, quoteAuthor} = this.props;

    return (
      <div className="quote-container">
        <div className="quote-text">
          <span className="quote">
            <FaQuoteLeft/>
          </span>
          {quoteText}
        </div>
  
        <div className="quote-author">{quoteAuthor}</div>
  
        <div className="button-container">
          <CustomButton onClick={() => this.handleClick()}>New Quote</CustomButton>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  quoteText: state.quote.quoteText,
  quoteAuthor: state.quote.quoteAuthor,
});

const mapDispatchToProps = (dispatch) => ({
  setQuoteText: (quote) => dispatch(setQuoteText(quote)),
  setQuoteAuthor: (quote) => dispatch(setQuoteAuthor(quote)),
  resetQuote: (quote) => dispatch(resetQuote(quote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);
