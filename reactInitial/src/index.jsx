import { createRoot } from "react-dom/client";

const root  = createRoot(document.querySelector("#root"));
const reactElement = <h1>Hello im from jsx!</h1>
console.log(reactElement);

root.render(
  reactElement
);