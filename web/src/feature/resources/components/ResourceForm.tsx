import Input from "../../../common/componets/Input";
import Button from "../../../common/componets/Button";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
  description: string;
  type: string;
  visibility: string;
};

function ResourceForm() {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8 space-y-5"
    >
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
        />
      </div>

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
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          />
        </div>

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
          />
        </div>
      </div>

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