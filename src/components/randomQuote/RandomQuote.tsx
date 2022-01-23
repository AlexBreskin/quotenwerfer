import React from 'react';
import useQuoteDataManager from '../../services/useQuoteDataManager';
import QuoteContainer from '../quoteContainer/QuoteContainer';


function RandomQuote() {
    const {
        isLoading,
        quoteList
      } = useQuoteDataManager();
      
    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <QuoteContainer quotes={quoteList} />
        </div>
    )
}

export default RandomQuote;