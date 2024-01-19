import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Contents, Sidebar } from "@/components/Sidebar";
import { Index } from "@/components/Index";
import { Parts } from "@/components/parts/Parts";
import { ErrorPage } from "./Error";
import { Activities } from "@/components/activities/Activities";
import { ActivityEdit } from "@/components/activities/ActivityEdit";
import { PartsEdit } from "./parts/PartsEdit";

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
          children: [
            { index: true, element: <Activities /> },
            {
              path: "/activities/:mode/",
              element: <ActivityEdit />,
            },
            {
              path: "/activities/:mode/:id",
              element: <ActivityEdit />,
            },
          ],
        },
        {
          path: "/parts",
          children: [
            { index: true, element: <Parts /> },
            {
              path: "/parts/:mode/",
              element: <PartsEdit />,
            },
            {
              path: "/parts/:mode/:id/",
              element: <PartsEdit />,
            },
          ],
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

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
