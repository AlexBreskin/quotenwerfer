import axios from "axios";
import { QuoteResponse } from "./quote";

export async function getQuotes(author: string | null) {
  let url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  if (author) {
    url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`;
  }

  const quoteResponse = axios.get<QuoteResponse>(url);

  if (!quoteResponse) {
    console.log("Unable to return quote. Received:", quoteResponse);
    return null;
  }

  return (await quoteResponse).data as QuoteResponse;
}
