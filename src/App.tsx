import "./styles/index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/routes/router.tsx";

//tanstack router setup

function App() {
  return <RouterProvider router={router} />;
}

export default App;
