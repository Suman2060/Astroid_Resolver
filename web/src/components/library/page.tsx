import { useEffect, useState } from "react";
import ResourceCard from "../resources/components/ResourceCard";
import Input from "../../common/componets/Input";
import { getResources } from "../../api/mockApi";
import type { Resources } from "../../../../shared/types";

function LibraryPage() {
  const [resources, setResources] = useState<Resources[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadResources() {
      const data = await getResources();
      setResources(data);
    }

    loadResources();
  }, []);

  const filterSearch =
    search.trim() === ""
      ? resources
      : resources.filter((resource) =>
          resource.title
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  return (
    <main>
      <h1>Asteroid Archive</h1>

      <section aria-labelledby="library-title">
        <h2 id="library-title">Library</h2>

        <Input
          id="search"
          name="search"
          type="search"
          value={search}
          placeholder="Search resources..."
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filterSearch.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default LibraryPage;