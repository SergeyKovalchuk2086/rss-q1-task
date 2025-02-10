import { CharacterInfo } from "..";
import { Person } from "../../types";

interface ListProps {
  heroes: Person[];
  showCharacterDetails: (hero: Person) => void;
}

export const List = (props: ListProps) => {
  const { heroes, showCharacterDetails } = props;

  if (heroes.length === 0) {
    return <p data-testid="no-heroes">No heroes</p>;
  }

  return (
    <>
      {heroes.map((hero) => (
        <CharacterInfo
          key={hero.name}
          hero={hero}
          onClick={() => showCharacterDetails(hero)}
        />
      ))}
    </>
  );
};
