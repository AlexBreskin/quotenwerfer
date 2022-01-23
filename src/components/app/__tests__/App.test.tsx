import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {
    it("Should show Learn React element ( TODO: Remove )", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});