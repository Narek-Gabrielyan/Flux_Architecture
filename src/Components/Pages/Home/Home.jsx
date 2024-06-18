import { NavLink } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { useEffect, useState } from "react";
// css
import "./Home.css";

export const Home = function ({ countries }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }, []);

  return loading ? (
    <div className="loading">
      <Commet color="#32cd32" size="large" text="Loading" textColor="#aa5200" />
    </div>
  ) : (
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