import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./styles/index.css";
import { router } from "@/routes/router.tsx";

//tanstack router setup

function App() {
  return <RouterProvider router={router} />;
}

export default App;
