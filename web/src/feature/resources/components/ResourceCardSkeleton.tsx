import Skeleton from "../../../common/componets/SkeletonLoading";

function ResourceCardSkeleton() {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-xs dark:border-gray-800 dark:bg-gray-900">
      <div>
        {/* Title */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <Skeleton variant="line" className="h-5 w-40" />
        </div>

        {/* Description */}
        <div className="mb-4 space-y-2">
          <Skeleton variant="line" className="h-3 w-full" />
          <Skeleton variant="line" className="h-3 w-5/6" />
          <Skeleton variant="line" className="h-3 w-3/4" />
        </div>

        {/* Type & Visibility */}
        <div className="space-y-3 border-t border-gray-100 pt-3 dark:border-gray-800">
          <div className="flex justify-between">
            <Skeleton variant="line" className="h-3 w-10" />

            <Skeleton variant="line" className="h-3 w-16" />
          </div>

          <div className="flex justify-between">
            <Skeleton variant="line" className="h-3 w-16" />

            <Skeleton variant="line" className="h-3 w-20" />
          </div>
        </div>
      </div>

      {/* Rating & Button */}
      <div className="mt-4 space-y-3">
        <div className="flex gap-1">
          <Skeleton variant="circle" className="h-5 w-5" />
          <Skeleton variant="circle" className="h-5 w-5" />
          <Skeleton variant="circle" className="h-5 w-5" />
          <Skeleton variant="circle" className="h-5 w-5" />
          <Skeleton variant="circle" className="h-5 w-5" />
        </div>

        <Skeleton variant="square" className="h-8 w-24" />
      </div>
    </article>
  );
}

export default ResourceCardSkeleton;
