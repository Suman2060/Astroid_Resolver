import type { Resources } from "../../../../../shared/types";
import Button from "../../../common/componets/Button";
import StatusBadge from "./StatusBadge";

type ResourceCardProps = {
  resource: Resources;
};

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold">
        {resource.title}
      </h2>

      <p className="mb-4 text-gray-600">
        {resource.description}
      </p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">Type:</span>{" "}
          {resource.type}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          <StatusBadge status={resource.status}/>
        </p>

        <p>
          <span className="font-semibold">Visibility:</span>{" "}
          {resource.visibility}
        </p>
      </div>

      <div className="mt-5">
        <Button>
          View Resource
        </Button>
      </div>
    </article>
  );
}

export default ResourceCard;