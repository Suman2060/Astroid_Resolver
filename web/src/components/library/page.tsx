import ResourceCard from "../resources/components/ResourceCard";
import { resources } from "../../../../shared/seed";
import { useState } from "react";
import Input from "../../common/componets/Input";

function LibraryPage() {
    const [search,setSearch] = useState("");

    const filterSearch = search.trim() === ""?resources: resources.filter((resource)=>{
       return  resource.title.toLowerCase().includes(search.toLowerCase())
    })
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
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default LibraryPage;
