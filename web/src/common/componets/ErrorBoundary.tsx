import {
  isRouteErrorResponse,
  Link,
  useRouteError,
} from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 dark:bg-gray-950">
          <div className="w-full max-w-lg text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Error 404
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Page not found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
              The page you're looking for doesn't exist or may have been
              moved.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      );
    }

    if (error.status === 401) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 dark:bg-gray-950">
          <div className="w-full max-w-lg text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600 dark:text-yellow-400">
              Error 401
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unauthorized
            </h1>

            <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
              You don't have permission to access this page. Please log in and
              try again.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      );
    }
  }

  const errorMessage =
    error instanceof Error
      ? error.message
      : "An unexpected error occurred.";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 dark:bg-gray-950">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-400">
          Application Error
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Something went wrong
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
          Something unexpected happened while loading this page. Please try
          again or return to the homepage.
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white px-4 py-3 text-left dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {errorMessage}
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}