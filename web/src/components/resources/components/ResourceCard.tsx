import type { Resources } from "../../../../../shared/types";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

type ResourceCardProps = {
  resource: Resources;
};

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article >
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {resource.title}
          </h3>
          <StatusBadge status={resource.status} />
        </div>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          {resource.description}
        </p>

        <div className="space-y-2 border-t border-gray-100 pt-3 text-sm dark:border-gray-700">
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span className="font-medium">Type:</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200 capitalize">{resource.type}</span>
          </div>

          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span className="font-medium">Visibility:</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200 capitalize">{resource.visibility}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
      <Link
      to = {`/resources/${resource.id}`}
        className="inline-block rounded-md border px-4 py-2"
      >
        View Resources
      </Link>
      </div>
    </article>
  );
}

export default ResourceCard;