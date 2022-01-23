import React from 'react';
import { Quote } from '../../services/quoteService/quote';
import SingleQuote from './singleQuote/SingleQuote';
import './QuoteContainer.css';

type QuotesProps = {
    quotes: Quote[]
}

function QuoteContainer(props: QuotesProps) {
    const {quotes} = props;
    return (
        <div className="quote-container">
            {quotes.map((quote: Quote) => {
                return (
                    <SingleQuote quote={quote} key={quote._id} />
                )
            })
            }
        </div>
    )
}

export default QuoteContainer;