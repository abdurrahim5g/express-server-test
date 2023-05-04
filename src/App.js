import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Phones from "./components/Phones/Phones";
import Phone from "./components/Phone/Phone";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <h1>Home</h1> },
    {
      path: "/phones",
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
