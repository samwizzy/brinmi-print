import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the root app", () => {
  render(<App />);
  const appBoot = screen.getByRole(/app/i);
  expect(appBoot).toBeInTheDocument();
});
