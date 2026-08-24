import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addRating } from "../../../api/mockApi";
import type { Resources } from "../../../../../shared/types";

type RatingResourcesProps = {
  resourceId: number;
};

const RatingResources = ({ resourceId }: RatingResourcesProps) => {
  const [rating, setRating] = useState(0);

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
    onMutate: async ({ resourceId, rating }) => {
      // Stop an existing resources request
      await queryClient.cancelQueries({
        queryKey: ["resources"],
      });

      // Save the current cache
      const previousData = queryClient.getQueryData<Resources[]>(["resources"]);

      // Create optimistic data
      const updatedData = previousData?.map((resource) => {
        if (resource.id === resourceId) {
          return {
            ...resource,
            rating: rating,
          };
        }

        return resource;
      });

      // Immediately update the cache
      queryClient.setQueryData(["resources"], updatedData);

      // Give onError access to the old data
      return {
        previousData,
      };
    },

    // 3. Rollback if API fails
    onError: (_error, _varibables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["resources"], context.previousData);
      }
    },

    // 4. Make sure cache is eventually fresh
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
  });

  return (
    <div>
      <p>Rate this resource</p>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            disabled={mutation.isPending}
            aria-label={`Rate ${star} out of 5`}
          >
            {rating >= star ? "★" : "☆"}
          </button>
        ))}
      </div>

      <p>Current rating: {rating}/5</p>

      <button
        disabled={rating === 0 || mutation.isPending}
        onClick={() =>
          mutation.mutate({
            resourceId,
            rating,
          })
        }
      >
        {mutation.isPending ? "Submitting..." : "Submit Rating"}
      </button>

      {mutation.isError && <p>{mutation.error.message}</p>}

      {mutation.isSuccess && <p>Successfully rated!</p>}
    </div>
  );
};

export default RatingResources;
