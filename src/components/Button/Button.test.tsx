import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it receives the text 'Reset'", () => {
    test("Then it should show a button with the 'Reset mass' text inside", () => {
      const expectedText = "Reset mass";
      const expectedAction = vi.fn();

      render(
        <Button text={`${expectedText}`} actionOnClick={expectedAction} />,
      );
      const button = screen.getByRole("button", { name: expectedText });
      expect(button).toBeInTheDocument();
    });
  });
});

describe("When the user clicks and receives an action", () => {
  test("Then it should call receives action", () => {
    const expectedText = "Reset mass";
    const expectedAction = vi.fn();

    render(<Button text={`${expectedText}`} actionOnClick={expectedAction} />);
    const button = screen.getByRole("button", { name: expectedText });
    fireEvent.click(button);

    expect(expectedAction).toHaveBeenCalled();
  });
});
