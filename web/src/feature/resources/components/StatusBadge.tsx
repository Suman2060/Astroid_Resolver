import type { ResourceStatus } from "../../../../../shared/types";

type StatusBadgeProps = {
  status: ResourceStatus;
};

function getStatusClass(status: ResourceStatus): string {
  switch (status) {
    case "available":
      return "bg-green-100 text-green-800";

    case "pending":
      return "bg-yellow-100 text-yellow-800";

    case "archived":
      return "bg-gray-200 text-gray-800";

    default:
      const exhaustiveCheck:never = status;
      return exhaustiveCheck;
  }
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(status)}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;