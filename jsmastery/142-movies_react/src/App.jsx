import { useState } from "react";
import Header from "./components/Header.jsx";
import TrendingMovies from "./components/TrendingMovies.jsx";
import AllMovies from "./components/AllMovies.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <TrendingMovies />

        <AllMovies searchTerm={searchTerm} />
      </div>
    </main>
  );
};

export default App;
