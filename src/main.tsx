import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import EditContact, {action as editAction} from "./routes/edit";
import Index from "./routes/index";
import ErrorPage from "./error-page";
import XmlEditor from "./routes/xmledit";

import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "xmledit",
        element: <XmlEditor />,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        action: editAction,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
