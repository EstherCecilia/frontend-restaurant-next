import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("#button", () => {
  it("handles click event", () => {
    const testData = {
      menu_type: "Test Menu",
      url: "https://example.com",
    };

    render(<Button {...testData} />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeTruthy();
  });
});
