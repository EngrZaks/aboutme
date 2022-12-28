import { render, screen } from "@testing-library/react";
// import App from "./App";
import Header from "./components/header/header";

test("renders my name", () => {
  render(<Header />);
  const nameElement = screen.getByText(/Zakariyya Abdullahi/i);
  expect(nameElement).toBeInTheDocument();
});
