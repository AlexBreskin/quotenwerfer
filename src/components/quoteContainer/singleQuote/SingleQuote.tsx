import React from 'react';
import { Quote } from '../../../services/quoteService/quote';
import { QuoteAction, QuoteActionKind } from '../../../services/quotesReducer';
import './SingleQuote.css';
import {
    Link
  } from "react-router-dom";

type QuoteProps = {
    quote: Quote
    dispatch: React.Dispatch<QuoteAction>
}

function SingleQuote(props: QuoteProps,) {
    const {quoteText, quoteAuthor, quoteGenre} = props.quote;
    const { dispatch } = props 
    return (
        <div className="bubble bubble-bottom-left">
            <div className="quote-text">
                {quoteText}
            </div>
            <div className="quote-author">
                <Link className='quote-link' to={`/Author?${quoteAuthor}`} onClick={() => {dispatch({ type: QuoteActionKind.RequestQuotes, payload: quoteAuthor })}}> - {quoteAuthor}</Link>
            </div>
            <div className="quote-genre">
                Genre: {quoteGenre}</div>
        </div>
    )
}

export default SingleQuote;