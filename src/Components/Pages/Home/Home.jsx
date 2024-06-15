import { NavLink } from "react-router-dom";
// css
import "./Home.css"

export const Home = function ({ countries }) {
  return (
    <div className="Home">
      {countries.map((el, ind) => (
        <div className="Home_first_child" key={"country" + (ind + 1)}>
          <h3>{el.name.common}</h3>
          <NavLink to={`/${el.name.common}`}>           
          <img src={el.flags.png} alt={"img".concat(ind + 1)} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};