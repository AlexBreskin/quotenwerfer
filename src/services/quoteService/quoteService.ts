import axios from "axios";
import { QuoteResponse } from "./quote";

export async function getRandomQuote() {
  const quoteResponse = axios.get<QuoteResponse>(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );

  if (!quoteResponse) {
    console.log("Unable to return quote. Received:", quoteResponse);
    return null;
  }

  return (await quoteResponse).data as QuoteResponse;
}
