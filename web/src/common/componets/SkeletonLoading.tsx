type SkeletonVariant = "line" | "circle" | "square";

type SkeletonProps = {
  variant?: SkeletonVariant;
  className?: string;
};

function getVariantClass(variant: SkeletonVariant = "line") {
  if (variant === "circle") {
    return "rounded-full";
  }

  if (variant === "square") {
    return "rounded-md";
  }

  return "rounded";
}

function Skeleton({ variant = "line", className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${getVariantClass(variant)} ${className}`}
    />
  );
}

export default Skeleton;