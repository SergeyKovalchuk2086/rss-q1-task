import { Person } from "../../../types";
import "./style.css";

interface ListProps {
  data: Person[];
}

export const List = (props: ListProps) => {
  const { data } = props;

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
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                Eye : {item.eye_color}, birth year : {item.birth_year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
