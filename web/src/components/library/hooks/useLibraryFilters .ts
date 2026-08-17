import { useSearchParams } from "react-router-dom";

function useLibraryFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") ?? "";
    const type = searchParams.get("type") ?? "";
    const tag = searchParams.get("tag") ?? "";
    const sort = searchParams.get("sort") ?? "";

    const setSearch = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value.trim() === "") {
            params.delete("search");
        } else {
            params.set("search", value);
        }

        setSearchParams(params);
    };

    const setType = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value.trim() === "") {
            params.delete("type");
        } else {
            params.set("type", value);
        }

        setSearchParams(params);
    };

    const setTag = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value.trim() === "") {
            params.delete("tag");
        } else {
            params.set("tag", value);
        }

        setSearchParams(params);
    };

    const setSort = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value.trim() === "") {
            params.delete("sort");
        } else {
            params.set("sort", value);
        }

        setSearchParams(params);
    };

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