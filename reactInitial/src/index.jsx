import { createRoot } from "react-dom/client";

const root  = createRoot(document.querySelector("#root"));
const reactElement = <h1>Hello im from jsx!</h1>
console.log(reactElement);

function CreateList(){
  return(
    <ul>
      <li>Mango</li>
      <li>Banana</li>
      <li>Pinaple</li>
    </ul>
  );
}

root.render(
  <div>
    <CreateList/>
  </div>
);