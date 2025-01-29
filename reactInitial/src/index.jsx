import { createRoot } from "react-dom/client";

const root  = createRoot(document.querySelector("#root"));
const reactElement = <h1>Hello im from jsx!</h1>
console.log(reactElement);
let name = 'Neamoth';
function CreateList(){
  return(
    <ul>
      <li>Mango</li>
      <li>Banana</li>
      <li>Pinaple</li>
    </ul>
  );
}
function CreateMyName(){
  return(
    <h1>Hello, my name is {name}</h1>
  );
}

root.render(
  <div>
    <CreateList/>
    <CreateMyName/>
  </div>
);