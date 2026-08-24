
import { useParams, Link } from "react-router-dom";

function CollectionDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Saved Collections
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {id ? `Viewing Collection #${id}` : "Manage your curated resource lists."}
        </p>
      </div>

      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p className="text-sm">No saved collections yet.</p>
        <div className="mt-3">
          <Link
            to="/library"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Browse Library →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetailPage;


