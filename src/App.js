import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Phones from "./components/Phones/Phones";
import Phone from "./components/Phone/Phone";
import Main from "./layouts/Main";
import Users from "./components/Users/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/phones/",
          element: <Phones></Phones>,
          loader: () => {
            return fetch("http://localhost:5000/phones/");
          },
        },
        {
          path: "phone/:id",
          element: <Phone></Phone>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/phones/${params.id}`),
        },
        {
          path: "/users",
          element: <Users></Users>,
          loader: async () => {
            return fetch("http://localhost:5000/users");
          },
        },
        {
          path: "*",
          element: <h2>Server is shartdown now</h2>,
        },
      ],
    },

    { path: "*", element: <h1>Error</h1> },
  ]);
  return (
    <main>
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </main>
  );
}

export default App;
