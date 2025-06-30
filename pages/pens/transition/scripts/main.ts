import { Panel } from "./Panel";
import { Transition } from "./transition";

const panel = new Panel();
const start = document.querySelector("button");

start?.addEventListener("click", () => {
  new Transition(panel);
  start.style.display = "none";
});
