import { memo } from "react";
import type { Resources } from "../../../../../shared/types";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import RatingResources from "./RatingResources";

type ResourceCardProps = {
  resource: Resources;
};

const ResourceCard = memo(function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-xs dark:border-gray-800 dark:bg-gray-900">
      <div>
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            {resource.title}
          </h3>
          <StatusBadge status={resource.status} />
        </div>

        <p className="mb-4 text-xs text-gray-600 dark:text-gray-300">
          {resource.description}
        </p>

        <div className="space-y-1.5 border-t border-gray-100 pt-3 text-xs dark:border-gray-800">
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
      </div>

      <div className="mt-4 space-y-3">
        <RatingResources
          resourceId={resource.id}
          currentRating={resource.rating}
        />

        <div>
          <Link
            to={`/resources/${resource.id}`}
            className="inline-block rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
});

export default ResourceCard;


