import { cleanup, render, screen } from '@testing-library/react';
import SingleQuote from '../SingleQuote';
import { Quote } from '../../../../services/quoteService/quote';
import { MemoryRouter } from 'react-router-dom';

describe("SingleQuote", () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    })

    const dummyQuote: Quote = {
        _id: "1",
        quoteText: "Test quote",
        quoteAuthor: "Test Author",
        quoteGenre: "Test Genre"
    }

    it("Should render the text of a quote", () =>
    {
        render(<MemoryRouter><SingleQuote quote={dummyQuote} dispatch={jest.fn()} /></MemoryRouter >);
        const quoteText = screen.getByText(dummyQuote.quoteText, {exact: false});
        expect(quoteText).toBeInTheDocument();
    })
    
    it("Should render the quote's author", () =>
    {
        render(<MemoryRouter><SingleQuote quote={dummyQuote} dispatch={jest.fn()} /></MemoryRouter>);
        const quoteAuthor = screen.getByText(dummyQuote.quoteAuthor, {exact: false});
        expect(quoteAuthor).toBeInTheDocument();
    })
    it("Should render the quote's genre", () =>
    {
        render(<MemoryRouter><SingleQuote quote={dummyQuote} dispatch={jest.fn()}/></MemoryRouter>);
        const quoteGenre = screen.getByText(dummyQuote.quoteGenre, {exact: false});
        expect(quoteGenre).toBeInTheDocument();
    })
})