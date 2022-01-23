import { getQuotes } from "../quoteService";
import { Quote } from "../quote";

describe("quoteService", () => {
  it("When called with no author, should return a single quote with its text, author and genre", () => {
    return getQuotes().then((quoteResponse) => {
      expect(quoteResponse).not.toBeNull();
      expect(quoteResponse?.totalQuotes).toBe(1);
      expect(quoteResponse?.data[0] as Quote).not.toBeNull();
    });
  });
  it("When called with an author, should return a multiple quotes with its text, author and genre", () => {
    return getQuotes("Albert Einstein").then((quoteResponse) => {
      expect(quoteResponse).not.toBeNull();
      expect(quoteResponse?.totalQuotes).toBeGreaterThan(1);
      expect(quoteResponse?.data[0] as Quote).not.toBeNull();
    });
  });
});
