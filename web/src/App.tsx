import { RouterProvider } from "react-router-dom";
import AppRoutes from "./common/Routes/AppRoutes";

function App() {
  return <RouterProvider router={AppRoutes}/>
}

export default App;
