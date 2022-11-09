import React from "react";
import ReactDOM from "react-dom";
import { Flow } from "./components/Flow";

const container = document.getElementById("app");
ReactDOM.render(<Flow />, container);

container.style.height = "100vh";
container.style.width = "100vw";

document.body.style.height = "100vh";
document.body.style.width = "100vw";
