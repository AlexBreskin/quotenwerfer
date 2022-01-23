import { cleanup, render, screen } from '@testing-library/react';
import SingleQuote from '../SingleQuote';
import { Quote } from '../../../../../services/quoteService/quote';

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
        render(<SingleQuote quote={dummyQuote} />);
        const quoteText = screen.getByText(dummyQuote.quoteText);
        expect(quoteText).toBeInTheDocument();
    })
    
    it("Should render the quote's author", () =>
    {
        render(<SingleQuote quote={dummyQuote}/>);
        const quoteAuthor = screen.getByText(dummyQuote.quoteAuthor, {exact: false});
        expect(quoteAuthor).toBeInTheDocument();
    })
    it("Should render the quote's genre", () =>
    {
        render(<SingleQuote quote={dummyQuote} />);
        const quoteGenre = screen.getByText(dummyQuote.quoteGenre);
        expect(quoteGenre).toBeInTheDocument();
    })
})