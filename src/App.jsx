// Libraries
import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Components/Pages/Home/Home";
import { initState, reducer } from "./assets/Store/Store";
import { countriesAPI } from "./assets/API/Api";
import { Country } from "./Components/Pages/Country/Country";
// css
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  console.log(state)
  useEffect(() => {
    countriesAPI.get_All_Countries(dispatch)
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home countries={state.countries} />} />
          <Route path="/:name" element={<Country />} />
        </Route>
      </Routes>
    </div>
  );
}