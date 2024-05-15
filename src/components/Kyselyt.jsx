import { useEffect, useState } from "react"
import { Link} from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import KyselynNäyttö from "./KyselynNäyttö";
import { Button } from "@mui/material";
export default function Kyselyt(){
    const [kyselyt, setKyselyt] = useState([]);


    useEffect(() => {
        fetchKyselyt();
    }, []);

    const fetchKyselyt = async () => {
        try {
            const response = await fetch("http://localhost:8080/kyselyt");
            const data = await response.json();

            setKyselyt(data);
            console.log("Kyselyt haettu:", data);
        } catch (error) {
            console.error("Virhe haettaessa kyselyitä:", error);
        }
    };
    

    return (
        <div>
        <h1>Kyselyt:</h1>
       
                {kyselyt.map((kysely, index) => (
                    <li key={index} >
                        {kysely.otsikko}
                        <Link to={`/kysely/${kysely.kyselyId}`}>
                        <Button variant="contained" color="primary"> Vastaa </Button>
                        </Link>
                        <Link to={`/kysely/kysymykset/${kysely.kyselyId}`}>
                        <Button variant="contained" color="primary"> Tarkastele </Button>
                        </Link>
                    </li>
                ))}
            
         </div>
    );
}

            /**<ul>
                {kyselyt.map((kysely, index) => (
                    <li key={index} >
                        <Link to={`/kysely/${kysely.kyselyId}`}>
                            {kysely.otsikko}
                        </Link>
                    </li>
                ))}
            </ul> */