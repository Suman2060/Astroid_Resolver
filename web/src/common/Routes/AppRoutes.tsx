import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const AppLayout = lazy(() => import("../componets/AppLayout"));
const ResourceDetailPage = lazy(() => import("../../feature/resources/components/ResourceDetailPage"));
const CollectionsPage = lazy(() => import("../../feature/collections/components/CollectionDetailPage"))
const SubmitPage = lazy(() => import("../../feature/submit/SubmitPage"))
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage"))
const LibraryPage = lazy(() => import("../../feature/library/Page"))
const ErrorBoundary = lazy(() => import("../componets/ErrorBoundary"))

const AppRoutes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Navigate to="/library" replace />,
      },
      {
        path: "/library",
        element: <LibraryPage />,
      },
      {
        path: "/resources/:id",
        element: <ResourceDetailPage />,
      },
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
      {
        path: "/submit",
        element: <SubmitPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default AppRoutes;
