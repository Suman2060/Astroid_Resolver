import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getResources } from "../../../api/mockApi";
import StatusBadge from "./StatusBadge";
import RatingResources from "./RatingResources";

function ResourceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resourceId = Number(id);

  const { data: resources = [], isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
  });

  const resource = resources.find((r) => r.id === resourceId);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Loading details...</p>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Resource not found
        </h2>
        <p className="text-sm text-gray-500">Resource #{id} could not be found.</p>
        <Link
          to="/library"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          ← Back to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <Link
        to="/library"
        className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        ← Back to Library
      </Link>

      <article className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {resource.title}
          </h1>
          <StatusBadge status={resource.status} />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {resource.description}
        </p>

        <div className="space-y-2 border-t border-gray-100 pt-3 text-sm dark:border-gray-800">
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span className="font-medium">Type:</span>
            <span className="font-semibold text-gray-800 capitalize dark:text-gray-200">
              {resource.type}
            </span>
          </div>

          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span className="font-medium">Visibility:</span>
            <span className="font-semibold text-gray-800 capitalize dark:text-gray-200">
              {resource.visibility}
            </span>
          </div>
        </div>

        <div className="pt-2">
          <RatingResources
            resourceId={resource.id}
            currentRating={resource.rating}
          />
        </div>
      </article>
    </div>
  );
}

export default ResourceDetailPage;
