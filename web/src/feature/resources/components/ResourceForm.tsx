
import Input from "../../../common/componets/Input";
import Button from "../../../common/componets/Button";
import { useForm } from "react-hook-form";
import {
  resourceSchema,
  type ResourceFormData,
} from "../../../../../shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";

function ResourceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResourceFormData>({
    resolver: zodResolver(resourceSchema),
  });

  function onSubmit(data: ResourceFormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8 space-y-5"
    >
      {/* Title */}
      <div className="space-y-1.5">
        <label
          htmlFor="title"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
        >
          Title
        </label>

        <Input
          id="title"
          {...register("title")}
          placeholder="e.g. Mastering React 19"
          aria-invalid={errors.title ? "true" : "false"}
          aria-describedby={
            errors.title ? "title-error" : undefined
          }
        />

        {errors.title && (
          <p id="title-error" role="alert">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label
          htmlFor="description"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
        >
          Description
        </label>

        <Input
          id="description"
          {...register("description")}
          placeholder="Brief summary of the resource..."
          aria-invalid={errors.description ? "true" : "false"}
          aria-describedby={
            errors.description
              ? "description-error"
              : undefined
          }
        />

        {errors.description && (
          <p id="description-error" role="alert">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Type & Visibility */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="type"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            Resource Type
          </label>

          <Input
            id="type"
            {...register("type")}
            placeholder="book, article, or video"
            aria-invalid={errors.type ? "true" : "false"}
            aria-describedby={
              errors.type ? "type-error" : undefined
            }
          />

          {errors.type && (
            <p id="type-error" role="alert">
              {errors.type.message}
            </p>
          )}
        </div>

        {/* Visibility */}
        <div className="space-y-1.5">
          <label
            htmlFor="visibility"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            Visibility
          </label>

          <Input
            id="visibility"
            {...register("visibility")}
            placeholder="public or private"
            aria-invalid={errors.visibility ? "true" : "false"}
            aria-describedby={
              errors.visibility ? "visibility-error" : undefined
            }
          />

          {errors.visibility && (
            <p id="visibility-error" role="alert">
              {errors.visibility.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full"
        >
          Submit Resource
        </Button>
      </div>
    </form>
  );
}

export default ResourceForm;

