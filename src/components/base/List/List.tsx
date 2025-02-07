import { useNavigate } from "react-router";
import { Person } from "../../../types";
import "./style.css";

interface ListProps {
  heroes: Person[];
  fetchCharacterDetails: (heroUrl: string) => void;
}

export const List = (props: ListProps) => {
  const { heroes, fetchCharacterDetails } = props;
  const navigate = useNavigate();

  const nameForUrl = (name: string) => {
    return name.replace(/\s/g, "");
  };

  const showCharacterDetails = (hero: Person) => {
    navigate(`/${nameForUrl(hero.name)}`);
    fetchCharacterDetails(hero.url);
  };

  return (
    <div className="list-container">
      <table className="hero-table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.name}>
              <td
                className="name-column"
                onClick={() => showCharacterDetails(hero)}
              >
                {hero.name}
              </td>
              <td>
                Eye: {hero.eye_color}, Birth Year: {hero.birth_year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
