import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root  = createRoot(document.querySelector("#root"));
const reactElement = createElement("h1", null, "Hello I am from CreatElements")
console.log(reactElement);

root.render(
  reactElement
);