import React from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/loader/loader.component';
import QuoteContainer from '../../components/quote-container/quote-container.component';

import './homepage.styles.scss';

const Homepage = ({loading}) => (
  <div className='home-container'>
    {loading === true ? <Loader />: <QuoteContainer />}
  </div>
);

const mapStateToProps = (state) => ({
  loading: state.loader.loading
});

export default connect(mapStateToProps)(Homepage);