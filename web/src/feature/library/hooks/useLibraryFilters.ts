import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function useLibraryFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const paramSearch = searchParams.get("search") ?? "";
    const [search, setSearchState] = useState(paramSearch);
    const searchParamsRef = useRef(searchParams);
    searchParamsRef.current = searchParams;

    
    useEffect(() => {
        setSearchState(paramSearch);
    }, [paramSearch]);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            const currentParams = new URLSearchParams(searchParamsRef.current);
            const currentVal = currentParams.get("search") ?? "";

            if (search.trim() === "") {
                if (currentParams.has("search")) {
                    currentParams.delete("search");
                    setSearchParams(currentParams, { replace: true });
                }
            } else if (currentVal !== search) {
                currentParams.set("search", search);
                setSearchParams(currentParams, { replace: true });
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [search, setSearchParams]);

    const type = searchParams.get("type") ?? "";
    const tag = searchParams.get("tag") ?? "";
    const sort = searchParams.get("sort") ?? "";

    const setSearch = useCallback((value: string) => {
        setSearchState(value);
    }, []);

    const setType = useCallback((value: string) => {
        const params = new URLSearchParams(searchParamsRef.current);

        if (value.trim() === "") {
            params.delete("type");
        } else {
            params.set("type", value);
        }

        setSearchParams(params, { replace: true });
    }, [setSearchParams]);

    const setTag = useCallback((value: string) => {
        const params = new URLSearchParams(searchParamsRef.current);

        if (value.trim() === "") {
            params.delete("tag");
        } else {
            params.set("tag", value);
        }

        setSearchParams(params, { replace: true });
    }, [setSearchParams]);

    const setSort = useCallback((value: string) => {
        const params = new URLSearchParams(searchParamsRef.current);

        if (value.trim() === "") {
            params.delete("sort");
        } else {
            params.set("sort", value);
        }

        setSearchParams(params, { replace: true });
    }, [setSearchParams]);

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