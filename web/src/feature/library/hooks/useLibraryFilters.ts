import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const DEBOUNCE_MS = 300;

function useLibraryFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchParamsRef = useRef(searchParams);
    searchParamsRef.current = searchParams;

    const setParam = useCallback((key: string, value: string) => {
        const params = new URLSearchParams(searchParamsRef.current);
        if (value.trim() === "") {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        setSearchParams(params, { replace: true });
    }, [setSearchParams]);

    const type = searchParams.get("type") ?? "";
    const tag = searchParams.get("tag") ?? "";
    const sort = searchParams.get("sort") ?? "";

    const setType = useCallback((value: string) => setParam("type", value), [setParam]);
    const setTag = useCallback((value: string) => setParam("tag", value), [setParam]);
    const setSort = useCallback((value: string) => setParam("sort", value), [setParam]);

    const paramSearch = searchParams.get("search") ?? "";
    const [search, setSearch] = useState(paramSearch);

    useEffect(() => {
        setSearch(paramSearch);
    }, [paramSearch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const trimmed = search.trim();
            const currentVal = searchParamsRef.current.get("search") ?? "";

            if (trimmed === currentVal) return; 

            setParam("search", trimmed);
        }, DEBOUNCE_MS);

        return () => clearTimeout(timer);
    }, [search, setParam]);

    return {
        search,
        type,
        tag,
        sort,
        setSearch,
        setType,
        setTag,
        setSort,
    };
}

export default useLibraryFilters;