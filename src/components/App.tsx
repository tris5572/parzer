import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Contents, Sidebar } from "@/components/Sidebar";
import { Index } from "@/components/Index";
import { Parts } from "@/components/parts/Parts";
import { ErrorPage } from "./Error";
import { Activities } from "./activities/Activities";

// ルーティングの設定
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "/activities",
          element: <Activities />,
        },
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
  ],
  { basename: import.meta.env.BASE_URL }
);

export function App() {
  console.log("1:", process.env.GITHUB_PAGES);
  console.log("2:", process.env.GITHUB_ACTIONS);
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
