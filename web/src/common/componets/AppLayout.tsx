import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default AppLayout;