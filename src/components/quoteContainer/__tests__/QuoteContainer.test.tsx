import { render, screen } from '@testing-library/react';
import { Quote } from '../../../services/quoteService/quote';
import QuoteContainer from '../QuoteContainer';
import { MemoryRouter } from 'react-router-dom';

describe("QuoteContainer", () => {
    const dummyQuotes: Quote[] = [{
        _id: "1",
        quoteText: "Test quote 1",
        quoteAuthor: "Test Author 1",
        quoteGenre: "Test Genre 1"
    },
    {
        _id: "2",
        quoteText: "Test quote 2",
        quoteAuthor: "Test Author 2",
        quoteGenre: "Test Genre 2"
    },
    {
        _id: "3",
        quoteText: "Test quote 3",
        quoteAuthor: "Test Author 3",
        quoteGenre: "Test Genre 3"
    }]

    it("Should contain provided quotes", () => {
        render(<MemoryRouter><QuoteContainer quotes={dummyQuotes} dispatch={jest.fn()} /></MemoryRouter>);
        const quoteTextFirst = screen.getByText(dummyQuotes[0].quoteText);
        const quoteTextSecond = screen.getByText(dummyQuotes[1].quoteText);
        const quoteTextThird = screen.getByText(dummyQuotes[2].quoteText);
        expect(quoteTextFirst).toBeInTheDocument();
        expect(quoteTextSecond).toBeInTheDocument();
        expect(quoteTextThird).toBeInTheDocument();

    })
});