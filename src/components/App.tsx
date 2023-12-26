import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Contents, Sidebar } from "@/components/Sidebar";
import { Index } from "@/components/Index";
import { Parts } from "@/components/Parts";
import { ErrorPage } from "./Error";

// ルーティングの設定
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/parts",
        element: <Parts />,
        children: [
          { index: true, element: <Parts /> },
          {
            path: "/parts/:id",
            element: <Parts />,
          },
        ],
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <Sidebar />
      <Contents>
        <Outlet />
      </Contents>
    </>
  );
}
