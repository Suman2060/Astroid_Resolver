import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "../componets/AppLayout";


import ResourceDetailPage from "../../feature/resources/components/ResourceDetailPage";
import CollectionsPage from "../../feature/collections/components/CollectionDetailPage";
import SubmitPage from "../../feature/submit/SubmitPage";

import NotFoundPage from "../Pages/NotFoundPage";
import LibraryPage from "../../feature/library/Page";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/library" replace />} />
        <Route path="/library" element={<LibraryPage />} />

        <Route path="/resources/:id" element={<ResourceDetailPage />} />

        <Route path="/collections" element={<CollectionsPage />} />

        <Route path="/submit" element={<SubmitPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
