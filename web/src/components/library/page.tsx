import { useEffect, useState } from "react";
import type { Resources } from "../../../../shared/types";
import { getResources } from "../../api/mockApi";
import ResourceCard from "../resources/components/ResourceCard";
import SearchBar from "./components/SearchBar";
import useLibraryFilters from "./hooks/useLibraryFilters ";

function LibraryPage() {
  const [resources, setResources] = useState<Resources[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    search,
    type,
    tag,
    sort,
    setSearch,
    setType,
    setTag,
    setSort,
  } = useLibraryFilters();

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
        if (!ignore) {
          setError("Something went wrong");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadResources();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredResources = resources
    .filter((resource) => {
      const matchesSearch =
        search.trim() === "" ||
        resource.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        type.trim() === "" ||
        resource.type === type;

      const matchesTag =
        tag.trim() === "" ||
        resource.tags?.includes(tag);

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
        <p>Asteroid Error</p>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Asteroid Archive</h1>

      <section aria-labelledby="library-title">
        <h2 id="library-title">Library</h2>

        <SearchBar
          search={search}
          onSearchChange={setSearch}
        />

      

        {filteredResources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default LibraryPage;