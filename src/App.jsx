
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Etusivu from "./components/Etusivu";
import Kyselyt from "./components/Kyselyt";
import KyselynNäyttö from "./components/KyselynNäyttö";
import Vastaukset from "./components/Vastaukset";

function App() {
  

  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Etusivu</Link>
        <Link to={"/kyselyt"}>Kyselyt</Link>
        <Link to={"/vastaukset"}>Vastaukset</Link>
        
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
// {/* Näytetään kyselyt */}
//{kyselyt.map((kysely, kyselyId) => (
  //<Kysely key={kyselyId} kysely={kysely} tallennaVastaukset={tallennaVastaukset} />
//))} */

//  <Routes>
//<Route path="/" element={<Etusivu />} />
//<Route path="/kyselyt" element={<Kyselyt />} />
//<Route path="/kysely/:kyselyId" element={<KyselynNäyttö />} />
//</Routes>
