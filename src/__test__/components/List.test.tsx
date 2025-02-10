import { render, screen } from "@testing-library/react";
import { List } from "../../components/List/List";
import "@testing-library/jest-dom";

const showCharacterDetails = () => ({});
const heroes = [
  {
    birth_year: "1",
    eye_color: "1",
    films: ["1"],
    gender: "1",
    hair_color: "1",
    height: "1",
    homeworld: "1",
    mass: "1",
    name: "1",
    skin_color: "1",
    created: "1",
    edited: "1",
    species: ["1"],
    starships: ["1"],
    url: "1",
    vehicles: ["1"],
  },
];

test("Verify that the component renders the specified number of cards", () => {
  render(<List heroes={heroes} showCharacterDetails={showCharacterDetails} />);

  const renderedCards = screen.getAllByTestId("characterInfo");
  expect(renderedCards).toHaveLength(heroes.length);
});

test("Check that an appropriate message is displayed if no cards are present.", () => {
  render(<List heroes={[]} showCharacterDetails={showCharacterDetails} />);

  expect(screen.getByTestId("no-heroes")).toBeInTheDocument();
  expect(screen.getByText("No heroes")).toBeInTheDocument();
});
