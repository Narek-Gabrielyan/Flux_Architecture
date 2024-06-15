import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { countriesAPI } from "../../../assets/API/Api";
import { initState, reducer } from "../../../assets/Store/Store";
// css
import "./Country.css";

export const Country = function () {
  const [state, dispatch] = useReducer(reducer, initState);
  const { name } = useParams();
  const nav = useNavigate();
  const back = () => nav(-1);
  useEffect(() => {
    countriesAPI.get_Country(dispatch, name);
  }, []);

  const countrie = state.country[0];
  //   console.log(countrie);

  return (
    countrie && (
      <div className="Country">
        <h2>երկիր։ {name}</h2>
        <p>մայրաքաղաքը։ {countrie.capital}</p>
        <p>տարածքը: {countrie.area} </p>
        <p>երկրի պաշտոնական անվանումը։ {countrie.name.official}</p>
        <p>մայրցամաքը: {countrie.region}</p>
        <div className="flags_arms">
          <img src={countrie.flags.png} alt={countrie.fifa} className="flags" />
          <img src={countrie.coatOfArms.png} alt="Arms" className="Arms_img" />
        </div>
        <div className="btn">
          <button onClick={back}>back</button>
        </div>
      </div>
    )
  );
};
