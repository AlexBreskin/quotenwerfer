import React from 'react';
import QuoteContainer from '../quoteContainer/QuoteContainer';
import { useEffect, useReducer } from "react";
import quotesReducer, { QuoteActionKind } from '../../services/quotesReducer';
import { getQuotes } from '../../services/quoteService/quoteService';
import './RandomQuote.css';
import { Link } from 'react-router-dom';

function RandomQuote() {
    const [{ isLoading, selectedAuthor, quoteList, quotesFetched }, dispatch] = useReducer(
      quotesReducer,
      {
        quoteList: [],
        selectedAuthor: null,
        isLoading: true,
        quotesFetched: 0
      }
    );
  // const navigate = useNavigate();
  // const navigationCallback = useCallback(() => navigate(`/Author?${selectedAuthor}`, {replace: true}), [navigate, selectedAuthor]);

  useEffect(() => {

    const fetchData = async function (selectedAuthor: string | null) {
      let result = await getQuotes(selectedAuthor);
      dispatch({ type: QuoteActionKind.SetQuotesList, payload: result?.data! });
    };
    fetchData(selectedAuthor);
    return () => {};
  }, [selectedAuthor, quotesFetched]);

    if (isLoading) return <div className='loading'>Getting new quote...</div>

    return (
        <div className="random-quote">
          <Link to="/">
          <button onClick={() => dispatch({ type: QuoteActionKind.RequestQuotes, payload: "" })
            }
            >Get me a new quote!</button>
          </Link>
            
            <QuoteContainer quotes={quoteList} dispatch={dispatch} />
        </div>
    )
}

export default RandomQuote;