import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root  = createRoot(document.querySelector("#root"));
root.render(
  createElement("h1", null, "Hello I am from CreatElements")
);