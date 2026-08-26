import { Suspense } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function PageLoader() {
  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent dark:border-indigo-400">


      </div>

    </div>
  )
}


function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Suspense  fallback={<PageLoader/>}>
              <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default AppLayout;

