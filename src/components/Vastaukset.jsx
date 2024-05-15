import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Vastaukset() {
  const [vastaukset, setVastaukset] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetchVastaukset();
  }, []);

  const fetchVastaukset = async () => {
    try {
      const response = await fetch("http://backend-deltakysely-back.rahtiapp.fi/vastaukset");
      const data = await response.json();
      // Ryhmittele vastaukset kysymysten mukaan
      const groupedVastaukset = groupVastauksetByKysymys(data);
      setVastaukset(groupedVastaukset);
      console.log("React urlin kyselyId parametri");
      console.log(params);
    } catch (error) {
      console.error("Virhe haettaessa vastauksia:", error);
    }
  };

  // Funktio ryhmittelee vastaukset kysymysten mukaan
  const groupVastauksetByKysymys = (vastaukset) => {
    const grouped = {};
    vastaukset.forEach((vastaus) => {
      const kysymys = vastaus.kysymys;
      if (kysymys) {
        const kysymysId = kysymys.kysymysId;
        if (!grouped[kysymysId]) {
          grouped[kysymysId] = [];
        }
        grouped[kysymysId].push(vastaus);
      }
    });
    return grouped;
  };

  return (
    <div>
      <h1>Vastaukset</h1>
      {Object.keys(vastaukset).map((kysymysId) => (
        <div key={kysymysId}>
          <h2>Kysymys: {vastaukset[kysymysId][0].kysymys.kysymysTeksti}</h2>
          <ul>
            {vastaukset[kysymysId].map((vastaus, index) => (
              <li key={index}>
                <p>Vastaus: {vastaus.vastausTxt}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Vastaukset;
