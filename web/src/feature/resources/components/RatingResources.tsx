import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addRating } from "../../../api/mockApi";
import type { Resources } from "../../../../../shared/types";

type RatingResourcesProps = {
  resourceId: number;
  currentRating?: number;
};

const RatingResources = ({ resourceId, currentRating = 0 }: RatingResourcesProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    // 1. API request
    mutationFn: ({
      resourceId,
      rating,
    }: {
      resourceId: number;
      rating: number;
    }) => addRating(resourceId, rating),

    // 2. Optimistic update
    onMutate: async ({ resourceId: targetId, rating: newRating }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ["resources"],
      });

      // Snapshot the previous value
      const previousData = queryClient.getQueryData<Resources[]>(["resources"]);

      // Optimistically update query cache
      if (previousData) {
        queryClient.setQueryData<Resources[]>(
          ["resources"],
          previousData.map((resource) =>
            resource.id === targetId
              ? { ...resource, rating: newRating }
              : resource
          )
        );
      }

      return { previousData };
    },

    // 3. Rollback if API fails
    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["resources"], context.previousData);
      }
    },

    // 4. Ensure cache is synced
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
  });

  const handleRate = (star: number) => {
    if (mutation.isPending) return;
    mutation.mutate({
      resourceId,
      rating: star,
    });
  };

  const activeStarCount = hoverRating || currentRating;

  return (
    <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Rating</span>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {currentRating > 0 ? `${currentRating}/5` : "Not rated"}
        </span>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <div
          className="flex items-center gap-1"
          onMouseLeave={() => setHoverRating(0)}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRate(star)}
              onMouseEnter={() => setHoverRating(star)}
              disabled={mutation.isPending}
              className={`text-base transition disabled:opacity-50 ${
                activeStarCount >= star
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-600 hover:text-yellow-300"
              }`}
              aria-label={`Rate ${star} of 5`}
            >
              ★
            </button>
          ))}
        </div>

        {mutation.isPending && (
          <span className="text-xs text-gray-400">Saving...</span>
        )}
      </div>
    </div>
  );
};

export default RatingResources;



