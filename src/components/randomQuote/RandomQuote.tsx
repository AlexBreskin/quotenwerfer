import React from 'react';
import QuoteContainer from '../quoteContainer/QuoteContainer';
import { useEffect, useReducer } from "react";
import quotesReducer, { QuoteActionKind } from '../../services/quotesReducer';
import { getQuotes } from '../../services/quoteService/quoteService';
import './RandomQuote.css';

function RandomQuote() {
    const [{ isLoading, selectedAuthor, quoteList }, dispatch] = useReducer(
      quotesReducer,
      {
        quoteList: [],
        selectedAuthor: null,
        isLoading: true,
      }
    );

  useEffect(() => {
    const fetchData = async function (selectedAuthor: string | null) {
      let result = await getQuotes(selectedAuthor);
      dispatch({ type: QuoteActionKind.SetQuotesList, payload: result?.data! });
    };
    fetchData(selectedAuthor);
    return () => {};
  }, [selectedAuthor]);

    if (isLoading) return <div className='loading'>Getting new quote...</div>

    return (
        <div className="random-quote">
            <button onClick={() => dispatch({ type: QuoteActionKind.RequestQuotes, payload: "" })    
            }
            >Get me a new quote!</button>
            <QuoteContainer quotes={quoteList} dispatch={dispatch} />
        </div>
    )
}

export default RandomQuote;