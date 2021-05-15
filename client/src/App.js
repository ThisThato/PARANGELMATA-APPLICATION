import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryListPage from "./components/CountryListPage";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={CountryListPage} />
      <Route path="/country/:countryname" component={Country} />
    </Router>
  );
}

export default App;
