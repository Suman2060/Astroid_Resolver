import { useParams } from "react-router-dom";

function ResourceDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <h1>Resource Details</h1>
      <p>Resource ID: {id}</p>
    </section>
  );
}

export default ResourceDetailPage;