function EmptyResourceState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        No resources yet
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        There are no resources available right now.
      </p>
    </div>
  );
}

export default EmptyResourceState;