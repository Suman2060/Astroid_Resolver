import { getResources } from "../../api/mockApi";
import ResourceCard from "../resources/components/ResourceCard";
import SearchBar from "./components/SearchBar";
import useLibraryFilters from "./hooks/useLibraryFilters";
import { useQuery } from "@tanstack/react-query";

function LibraryPage() {
  //  throw new Error("Test error");
  const {
    data: resources = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
  });

  const { search, setSearch } = useLibraryFilters();

 
  const filteredResources = resources.filter((resource) => {
    return (
      search.trim() === "" ||
      resource.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (isLoading) {
    return (
      <main className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Asteroid Archive
        </h1>
        <p className="text-sm text-gray-500">Loading resources...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Asteroid Archive
        </h1>
        <p className="text-sm text-red-500">{error?.message || "Failed to load resources."}</p>
      </main>
    );
  }

  return (

    
    <main className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Asteroid Archive
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Search and view resources in the library.
        </p>
      </div>

      <div className="max-w-md">
        <SearchBar search={search} onSearchChange={setSearch} />
      </div>

      {filteredResources.length === 0 ? (
        <p className="text-sm text-gray-500">No resources found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </main>
  );
}

export default LibraryPage;



