import React from "react";
import { connect } from "react-redux";

import QuoteService from "../../services/quote.service";
import { setLoaderStatus } from "../../redux/loader/loader.actions";
import { setQuoteText, setQuoteAuthor } from "../../redux/quote/quote.actions";

import Loader from "../../components/loader/loader.component";
import QuoteContainer from "../../components/quote-container/quote-container.component";

import "./homepage.styles.scss";

class Homepage extends React.Component {

  componentDidMount = () => {
    const {setLoaderStatus, setQuoteText, setQuoteAuthor} = this.props;
    
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
  }

  render() {
    const {loading} = this.props;

    return (
      <div className="home-container">
        {loading === true ? <Loader /> : <QuoteContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loader.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setLoaderStatus: (quote) => dispatch(setLoaderStatus(quote)),
  setQuoteText: (quote) => dispatch(setQuoteText(quote)),
  setQuoteAuthor: (quote) => dispatch(setQuoteAuthor(quote))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
