import { Person } from "../../../types";
import "./style.css";

interface ListProps {
  heroes: Person[];
}

export const List = (props: ListProps) => {
  const { heroes } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Person name</th>
            <th>About person</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.name}>
              <td>{hero.name}</td>
              <td>
                Eye : {hero.eye_color}, birth year : {hero.birth_year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
