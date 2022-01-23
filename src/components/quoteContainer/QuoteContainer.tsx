import React from 'react';
import { Quote } from '../../services/quoteService/quote';
import SingleQuote from './singleQuote/SingleQuote';
import './QuoteContainer.css';
import { QuoteAction } from '../../services/quotesReducer';

type QuotesProps = {
    quotes: Quote[]
    dispatch: React.Dispatch<QuoteAction>
}

function QuoteContainer(props: QuotesProps) {
    const {quotes, dispatch} = props;
    return (
        <div className="quote-container">
            {quotes.map((quote: Quote) => {
                return (
                    <SingleQuote quote={quote} key={quote._id} dispatch={dispatch} />
                )
            })
            }
        </div>
    )
}

export default QuoteContainer;