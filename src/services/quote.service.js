const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

const QuoteService = async () => {
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    throw(error);
  }
};

export default QuoteService;