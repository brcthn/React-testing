import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Greeting component", () => {
  test("render Hello world as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //Assert
    const helloWorldElement = screen.getByText("Hello world!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not click", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed' if the button was  click", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' on the screen when button was clicked ", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});

// screen.find return promise
//screen.get return error
//screen.query
