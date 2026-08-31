import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import ResourceForm from "./ResourceForm";

describe("ResourceForm", () => {
  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();

    render(<ResourceForm />);

    const submitButton = screen.getByRole("button", {
      name: /submit resource/i,
    });

    await user.click(submitButton);

    expect(screen.getAllByRole("alert")).toHaveLength(4);
  });
});