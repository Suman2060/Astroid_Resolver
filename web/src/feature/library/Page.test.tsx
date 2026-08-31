import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import LibraryPage from "./Page";
import type { Resources } from "../../../../shared/types";

import { getResources } from "../../api/mockApi";

vi.mock("../../api/mockApi", () => ({
  getResources: vi.fn(),
}));

const mockResources: Resources[] = [
  {
    id: 1,
    title: "React Mastering",
    description: "Learn React deeply",
    type: "book",
    tags: ["react", "frontend"],
    status: "available",
    visibility: "public",
    rating: 5,
  },
  {
    id: 2,
    title: "TypeScript Guide",
    description: "Learn TypeScript",
    type: "article",
    tags: ["typescript"],
    status: "available",
    visibility: "public",
    rating: 4,
  },
];

describe("LibraryPage", () => {
  it("renders resources from the API", async () => {
    vi.mocked(getResources).mockResolvedValue(mockResources);

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LibraryPage />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(
      await screen.findByText("React Mastering"),
    ).toBeInTheDocument();

    expect(
      await screen.findByText("TypeScript Guide"),
    ).toBeInTheDocument();
  });
});