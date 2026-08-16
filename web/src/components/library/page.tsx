import { useEffect, useState } from "react";
import type { Resources } from "../../../../shared/types";
import { getResources } from "../../api/mockApi";   
import ResourceCard from "../resources/components/ResourceCard";
import SearchBar from "./components/SearchBar";

function LibraryPage() {
  const [resources, setResources] = useState<Resources[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    async function loadResources() {
      try {
        setLoading(true);
        setError(null);

        const data = await getResources();
        if (!ignore) {
          setResources(data);
        }
      } catch {
        if (!ignore) setError("Something went Wrong");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadResources();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredResources =
    search.trim() === ""
      ? resources
      : resources.filter((resource) =>
          resource.title.toLowerCase().includes(search.toLowerCase()),
        );
  if (loading) {
    return (
      <main>
        <h1>Asteroid Archive</h1>
        <p>Loading resources...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>Astroid Error</p>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Asteroid Archive
        </h1>
      </header>

      <section aria-labelledby="library-title">
        <h2
          id="library-title"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
        >
          Library
        </h2>
        <div className="w-full sm:w-80">
          <SearchBar search={search} onSearchChange={setSearch} />
        </div>

        {filteredResources.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
            No resources found.
          </div>
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
