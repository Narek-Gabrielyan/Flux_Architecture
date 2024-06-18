import { useReducer } from "react";
import {
  DEL_CLICK_AC,
  Ent_Inp_AC,
  get_Inp_Val_AC,
  initState,
  reducer,
} from "../../assets/Store/Store";
import { countriesAPI } from "../../assets/API/Api";

// css
import "./Header.css";

export const Header = function () {
  const [country, dispatch] = useReducer(reducer, initState);
  console.log(country);

  // KeyDown Enter
  const enter_Click = (e) =>
    e.key == "Enter"
      ? countriesAPI.get_Input_Country(dispatch, e.target.value) &
        dispatch(Ent_Inp_AC()) & dispatch
      : false;
  
  const del_Click = () => (
    dispatch(DEL_CLICK_AC())
  )



  return (
    <>
      <div className="Header">
        <span>Header</span>
        <input
          value={country.text}
          onKeyDown={(e) => enter_Click(e)}
          onChange={(e) => dispatch(get_Inp_Val_AC(e.target.value))}
        />
      </div>
      <div>
        {country.country.length > 0 && (
          <p className={"del_country"}>
            <button onClick={() => del_Click()}>delete</button>
          </p>
        )}
        {country.country.map((el, ind) => (
          <div className="Country" key={"count" + (ind + 1)}>
            <h2>երկիր։ {el.name.common}</h2>
            <p>մայրաքաղաքը։ {el.capital}</p>
            <p>տարածքը: {el.area} </p>
            <p>երկրի պաշտոնական անվանումը։ {el.name.official}</p>
            <p>մայրցամաքը: {el.region}</p>
            <div className="flags_arms">
              <img src={el.flags.png} alt={el.fifa} className="flags" />
              <img src={el.coatOfArms.png} alt="Arms" className="Arms_img" />
            </div>
          </div>
        ))}
        <hr style={{borderColor: "black"}} />
      </div>
    </>
  );
};
