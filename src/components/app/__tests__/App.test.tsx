import { render, screen } from '@testing-library/react';
import { Quote } from '../../../services/quoteService/quote';
import App from '../App';

describe("App", () => {
    it("Should render the app", () => {
    render(<App />);
  });
});