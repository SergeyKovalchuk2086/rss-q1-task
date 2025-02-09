import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CharacterInfo } from "../../components";

const hero = {
  birth_year: "1",
  eye_color: "green",
  films: ["1"],
  gender: "1",
  hair_color: "1",
  height: "1",
  homeworld: "1",
  mass: "1",
  name: "test name",
  skin_color: "1",
  created: "1",
  edited: "1",
  species: ["1"],
  starships: ["1"],
  url: "1",
  vehicles: ["1"],
};

test("Component render the relevant data", () => {
  render(<CharacterInfo hero={hero} onClick={() => ({})} />);

  expect(screen.getByTestId("character-name")).toBeInTheDocument();
  expect(screen.getByTestId("character-name")).toHaveTextContent(hero.name);

  expect(screen.getByTestId("character-eye")).toBeInTheDocument();
  expect(screen.getByTestId("character-eye")).toHaveTextContent(hero.eye_color);
});
