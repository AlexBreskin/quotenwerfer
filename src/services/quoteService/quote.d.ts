export type Quote = {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
};

export type QuoteResponse = {
  statusCode: number;
  message: string;
  pagination: {
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  totalQuotes: number;
  data: Quote[];
};
