import { render, screen } from "@testing-library/react";
import DailyObjectives from "./DailyObjectives";

test("should render title", () => {
  render(<DailyObjectives />);
  const title = screen.getByText(/my daily objectives/i);
  expect(title).toBeInTheDocument();
});
