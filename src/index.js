import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <div className=""></div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider {...{ router }}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
