import { Person } from "../../types";

interface CharacterInfoProps {
  hero: Person;
  onClick: () => void;
}

export const CharacterInfo = (props: CharacterInfoProps) => {
  const { hero, onClick } = props;

  return (
    <tr data-testid="characterInfo" className="hero">
      <td className="name-column" onClick={onClick}>
        {hero.name}
      </td>
      <td>
        Eye: {hero.eye_color}, Birth Year: {hero.birth_year}
      </td>
    </tr>
  );
};
