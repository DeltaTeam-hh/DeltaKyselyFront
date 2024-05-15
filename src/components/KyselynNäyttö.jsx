import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import "./App.css";
import Kysely from "./Kysely";



function KyselynNäyttö() {
  const [kyselyt, setKyselyt] = useState([]);
  const { kyselyId } = useParams();
 
  useEffect(() => {
    fetchKyselyt();
  }, [kyselyId]);

  const fetchKyselyt = async () => {
    try {
      const response = await fetch(`http://backend-deltakysely-back.rahtiapp.fi/kyselyt${kyselyId}`);
      //const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/kyselyt/1");http://localhost:8080/kyselyt
      const data = await response.json();
      setKyselyt(data);
    } catch (error) {
      console.error("Virhe haettaessa kyselyitä:", error);
    }
  };

  const tallennaVastaukset = async (vastaukset) => {
    try {
      const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/vastaukset", {
        //const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/vastaukset", {http://localhost:8080/vastaukset
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vastaukset),
      });
      if (response.ok) {
        console.log("Vastaukset tallennettu onnistuneesti!");
      } else {
        console.error("Vastauksien tallentaminen epäonnistui.");
      }
    } catch (error) {
      console.error("Virhe tallennettaessa vastauksia:", error);
    }
  };

  return (
    <div>
      {/* Näytetään kyselyt */}
{kyselyt.map((kysely, kyselyId) => (
  <Kysely key={kyselyId} kysely={kysely} tallennaVastaukset={tallennaVastaukset} />
))}
    </div>
  );
}

export default KyselynNäyttö;