import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import CountryListPage from "./components/CountryListPage";

function App() {
  return (
    <Router>
      <Header />
      <CountryListPage />
    </Router>
  );
}

export default App;
