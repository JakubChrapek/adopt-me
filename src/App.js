import React from "react";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
