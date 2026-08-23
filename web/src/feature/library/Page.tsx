import { getResources } from "../../api/mockApi";
import ResourceCard from "../resources/components/ResourceCard";
import SearchBar from "./components/SearchBar";
import useLibraryFilters from "./hooks/useLibraryFilters";
import { useQuery } from "@tanstack/react-query";

function LibraryPage() {
const {
  data: resources = [],
  isLoading,
  isError,
  error,
} = useQuery({
  queryKey: ["resources"],
  queryFn: getResources,
});

  const { search, type, tag, sort, setSearch } = useLibraryFilters();

  const filteredResources = resources
    .filter((resource) => {
      const matchesSearch =
        search.trim() === "" ||
        resource.title.toLowerCase().includes(search.toLowerCase());

      const matchesType = type.trim() === "" || resource.type === type;

      const matchesTag = tag.trim() === "" || resource.tags?.includes(tag);

      return matchesSearch && matchesType && matchesTag;
    })
    .sort((a, b) => {
      if (sort === "title-asc") {
        return a.title.localeCompare(b.title);
      }

      if (sort === "title-desc") {
        return b.title.localeCompare(a.title);
      }

      return 0;
    });

  if (isLoading) {
    return (
      <main>
        <h1>Asteroid Archive</h1>
        <p>Loading resources...</p>
      </main>
    );
  }


  console.log("isError:", isError);
console.log("error:", error);
  if (isError) {
    return (
      <main>
        <p>Asteroid Error</p>
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Asteroid Archive</h1>

      <section aria-labelledby="library-title">
        <h2 id="library-title">Library</h2>

        <SearchBar search={search} onSearchChange={setSearch} />

        {filteredResources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default LibraryPage;
