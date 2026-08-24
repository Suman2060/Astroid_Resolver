import { useMutation } from "@tanstack/react-query";
import { addToCollection } from "../../api/mockApi";

type CollectionProps = {
  resourceId: string;
};

export function CollectionPage({ resourceId }: CollectionProps) {
  const mutation = useMutation({
    mutationFn: addToCollection,
  });

  if (mutation.isSuccess) {
    return (
      <main>
        <p>Resource ID: {resourceId} is added to collection</p>
      </main>
    );
  }

  if (mutation.isError) {
    return (
      <main>
        <p>{mutation.error.message}</p>
      </main>
    );
  }
  return (
    <button
      onClick={() => {
        mutation.mutate(resourceId);
      }}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? "Adding" : "Add to collection"}
    </button>
  );
}
