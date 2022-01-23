import React from 'react';
import { Quote } from '../../services/quoteService/quote';

type QuoteProps = {
    quote: Quote
}

function SingleQuote(props: QuoteProps) {
    const {quoteText, quoteAuthor, quoteGenre} = props.quote;
    return (
        <div className="bubble bubble-bottom-left">
            <div className="quote-text">
                {quoteText}
            </div>
            <div className="quote-author">- {quoteAuthor}</div>
            <div className="quote-genre">{quoteGenre}</div>
        </div>
    )
}

export default SingleQuote;