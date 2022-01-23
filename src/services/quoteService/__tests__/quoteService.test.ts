import { getRandomQuote } from "../quoteService";
import { Quote } from "../quote";

describe("quoteService", () => {
  it("Should return an object with data, quote, author and genre", () => {
    return getRandomQuote().then((quoteResponse) => {
      expect(quoteResponse).not.toBeNull();
      expect(quoteResponse?.totalQuotes).toBe(1);
      expect(quoteResponse?.data[0] as Quote).not.toBeNull();
    });
  });
});
