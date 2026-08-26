import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./common/Routes/AppRoutes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
        </div>
      }
    >
      <RouterProvider router={AppRoutes} />
    </Suspense>
  );
}

export default App;
