import type { ResourceStatus } from "../../../../../shared/types";

type StatusBadgeProps = {
  status: ResourceStatus;
};

function getStatusClass(status: ResourceStatus): string {
  switch (status) {
    case "available":
      return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";

    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300";

    case "archived":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";

    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${getStatusClass(status)}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
