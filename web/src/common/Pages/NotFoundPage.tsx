

import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-md text-center py-16 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        The page you are looking for does not exist.
      </p>
      <div>
        <Link
          to="/library"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          Return to Library →
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;


