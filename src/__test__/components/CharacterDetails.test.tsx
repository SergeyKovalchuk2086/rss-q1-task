import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { characterDetailsService } from "../../apiServices";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import "@testing-library/jest-dom";

const character = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

test("Detailed card component correctly displays the detailed card data", async () => {
  render(
    <MemoryRouter initialEntries={["/?heroId=1"]}>
      <Routes>
        <Route path="/" element={<CharacterDetails />} />
      </Routes>
    </MemoryRouter>,
  );

  await characterDetailsService.fetchCharacterDetails("1");
  await waitFor(() => {
    expect(screen.getByTestId("name")).toHaveTextContent(character.name);
    expect(screen.getByTestId("height")).toHaveTextContent(character.height);
    expect(screen.getByTestId("mass")).toHaveTextContent(character.mass);
    expect(screen.getByTestId("color")).toHaveTextContent(character.hair_color);
  });
});
