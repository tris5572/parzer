import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./Index";
import { Parts } from "./Parts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/parts",
    element: <Parts />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
