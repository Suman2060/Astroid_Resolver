import { Route, Routes } from "react-router-dom";

import AppLayout from "../componets/AppLayout";

import LibraryPage from "../../components/library/page";
import ResourceDetailPage from "../../components/resources/components/ResourceDetailPage";
import CollectionsPage from "../../components/collections/components/CollectionDetailPage";
import SubmitPage from "../../components/submit/SubmitPage";

import NotFoundPage from "../Pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/library" element={<LibraryPage />} />

        <Route
          path="/resources/:id"
          element={<ResourceDetailPage />}
        />

        <Route
          path="/collections"
          element={<CollectionsPage />}
        />

        <Route
          path="/submit"
          element={<SubmitPage />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;