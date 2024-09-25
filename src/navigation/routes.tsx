import { Layout } from "../components/Layout/Layout";
import { Workflow } from "../components/Workflow/Workflow";
import { IndexPage } from "../pages/IndexPage/IndexPage";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    element: <Layout />,

    children: [
      { path: "/boards/:boardId", element: <Workflow /> },
      { path: "/", element: <IndexPage /> },
      { path: "/boards", element: <IndexPage /> },
    ],
  },
];
