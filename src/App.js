import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bira",
      animal: "Dog",
      breed: "German Shepherd"
    }),
    React.createElement(Pet, {
      name: "Remi",
      animal: "Dog",
      breed: "German Shepherd"
    }),
    React.createElement(Pet, {
      name: "Roman",
      animal: "Cat",
      breed: "Roof walker"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
