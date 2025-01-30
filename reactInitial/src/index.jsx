import {useState} from 'react';
import { createRoot } from "react-dom/client";
import { Fragment } from 'react';

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
function CreateMyName(){
  const [name] = useState('Neamoth');
  return(
    <h1>Hello, my name is {name}</h1>
  );
}

function CreateAppend(){
  const text = document.createElement('h1');
  text.className = "header";
  text.textContent = "I am from vanilla js";
  document.body.appendChild(text);
}

root.render(
  <>
    <CreateList/>
    <CreateMyName/>
    <CreateAppend/>
  </>
);