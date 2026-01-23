import { ApiReferenceReact } from "@scalar/api-reference-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getDocs } from "@/api/openapi.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiReferenceReact
      configuration={{
        content: getDocs(),
        orderSchemaPropertiesBy: "preserve",
        darkMode: false,
        forceDarkModeState: "light",
        hideDarkModeToggle: true,
      }}
    />
  </StrictMode>
);
