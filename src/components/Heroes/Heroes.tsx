import { useNavigate } from "react-router";
import { List } from "..";
import { Person } from "../../types";
import "./style.css";

interface HeroesProps {
  heroes: Person[];
}

export const Heroes = (props: HeroesProps) => {
  const { heroes } = props;
  const navigate = useNavigate();

  const nameForUrl = (name: string) => {
    return name.replace(/\s/g, "");
  };

  const showCharacterDetails = (hero: Person) => {
    const heroId = hero.url.split("people/")[1].replace("/", "");

    navigate(`/${nameForUrl(hero.name)}?heroId=${heroId}`);
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
          <List heroes={heroes} showCharacterDetails={showCharacterDetails} />
        </tbody>
      </table>
    </div>
  );
};
