import { render } from '@testing-library/react';
import RandomQuote from '../RandomQuote';

describe("RandomQuote", () => {
    it("Should render the page", () => {
    render(<RandomQuote />);
  });
});