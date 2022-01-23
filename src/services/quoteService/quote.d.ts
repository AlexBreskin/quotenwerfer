export interface Quote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
}

export interface QuoteResponse {
  statusCode: number;
  message: string;
  pagination: {
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
  totalQuotes: number;
  data: Quote[];
}
