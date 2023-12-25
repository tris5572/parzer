// ルーティングは以下のURLのサンプルを参照。
// https://github.com/remix-run/react-router/blob/dev/examples/route-objects/src/App.tsx

import { Outlet, RouteObject, useRoutes } from "react-router-dom";

import { Index } from "@/components/Index";
import { Parts } from "@/components/Parts";
import { Sidebar } from "@/components/Sidebar";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "parts",
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
];

function App() {
  const element = useRoutes(router);
  return <>{element};</>;
}

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
