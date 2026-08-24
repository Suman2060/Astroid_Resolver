import ResourceForm from "../resources/components/ResourceForm";

function SubmitPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Submit a Resource
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Share high-quality books, articles, or videos with the community.
        </p>
      </div>

      <ResourceForm />
    </div>
  );
}

export default SubmitPage;