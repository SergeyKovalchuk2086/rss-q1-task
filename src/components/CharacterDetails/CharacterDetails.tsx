import { useNavigate, useSearchParams } from "react-router";
import { Person } from "../../types";
import { useEffect, useState } from "react";
import { characterDetailsService } from "../../apiServices";
import { Loader } from "..";
import "./style.css";

export const CharacterDetails = () => {
  const [state, setState] = useState<{
    character: Person;
    isFetchingCharacter: boolean;
    error: string;
  }>({
    character: {} as Person,
    isFetchingCharacter: false,
    error: "",
  });

  const [searchParams] = useSearchParams();
  const id: string | null = searchParams.get("heroId");

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setState({
        ...state,
        error: "Something went wrong",
        isFetchingCharacter: false,
      });

      return;
    }

    setState({ ...state, isFetchingCharacter: true });

    characterDetailsService.fetchCharacterDetails(id).then((data) => {
      setState({
        ...state,
        character: data,
        isFetchingCharacter: false,
      });
    });
  }, [id]);

  if (state.isFetchingCharacter) {
    return <Loader />;
  }

  if (state.error) {
    return <div>{state.error}</div>;
  }

  return (
    <div className="character-card">
      <button className="close-button" onClick={() => navigate("/")}>
        ×
      </button>
      <h2 className="character-name">{state.character.name}</h2>
      <div className="character-info">
        <table>
          <tbody>
            <tr>
              <td>Height</td>
              <td>{state.character.height} cm</td>
            </tr>
            <tr>
              <td>Mass</td>
              <td>{state.character.mass} kg</td>
            </tr>
            <tr>
              <td>Hair Color</td>
              <td>{state.character.hair_color}</td>
            </tr>
            <tr>
              <td>Skin Color</td>
              <td>{state.character.skin_color}</td>
            </tr>
            <tr>
              <td>Eye Color</td>
              <td>{state.character.eye_color}</td>
            </tr>
            <tr>
              <td>Birth Year</td>
              <td>{state.character.birth_year}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{state.character.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CharacterDetails;
