import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "../componets/AppLayout";

import ResourceDetailPage from "../../feature/resources/components/ResourceDetailPage";
import CollectionsPage from "../../feature/collections/components/CollectionDetailPage";
import SubmitPage from "../../feature/submit/SubmitPage";
import NotFoundPage from "../Pages/NotFoundPage";
import LibraryPage from "../../feature/library/Page";
import ErrorBoundary from "../componets/ErrorBoundary";

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
