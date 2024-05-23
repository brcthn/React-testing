import Async from "./Async";
import { render, screen } from "@testing-library/react";
describe("Async Component", () => {
  test("render posts if request succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "first post" }],
    });
    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem", {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
