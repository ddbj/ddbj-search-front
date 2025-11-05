// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { setProjectAnnotations } from "@storybook/react-vite";
import * as previewAnnotations from "./preview";

const annotations = setProjectAnnotations([previewAnnotations]);
