function NoResourceResults() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        No matching resources
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        We couldn't find any resources matching your current filters.
      </p>
    </div>
  );
}

export default NoResourceResults;