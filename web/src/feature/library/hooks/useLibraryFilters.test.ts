import { renderHook, act } from "@testing-library/react";
import {
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import useLibraryFilters from "./useLibraryFilters";

function useTestHook() {
  const filters = useLibraryFilters();
  const location = useLocation();

  return {
    ...filters,
    pathname: location.pathname,
    searchParams: location.search,
  };
}

describe("useLibraryFilters", () => {
  it("updates the search parameter after debounce", () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useTestHook(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.setSearch("react");
    });

    expect(result.current.search).toBe("react");

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.searchParams).toBe("?search=react");

    vi.useRealTimers();
  });
});