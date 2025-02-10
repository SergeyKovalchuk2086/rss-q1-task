import { Person } from "../../types";

interface CharacterInfoProps {
  hero: Person;
  onClick: () => void;
}

export const CharacterInfo = (props: CharacterInfoProps) => {
  const { hero, onClick } = props;

  return (
    <tr data-testid="characterInfo" className="hero">
      <td
        data-testid="character-name"
        className="name-column"
        onClick={onClick}
      >
        {hero.name}
      </td>
      <td data-testid="character-eye">Eye: {hero.eye_color}</td>
      <td>Birth Year: {hero.birth_year}</td>
    </tr>
  );
};
