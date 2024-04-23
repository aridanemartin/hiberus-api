import { cleanup, render } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";
import { describe, expect, test, vi } from "vitest";
import { afterEach } from "node:test";

describe("ProgressBar", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the progress bar with the correct width", () => {
    const value = 50;
    const stat = "Progress";

    const { getByTestId } = render(<ProgressBar value={value} stat={stat} />);

    const progressBar = getByTestId("progress-bar");
    const style = getComputedStyle(progressBar);
    expect(style.width).toBe(`${value}%`);
  });

  test("renders the label with the correct text", () => {
    const value = 50;
    const stat = "Progress";

    const { getByText } = render(<ProgressBar value={value} stat={stat} />);

    const label = getByText(`${stat}:`);
    expect(label).toBeDefined();
  });
});
