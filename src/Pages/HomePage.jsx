import { useEffect, useState } from "react";
import CardBikes from "../Components/CardBikes";
import axios from "axios"


function HomePage() {

    const [allBike, setAllBike] = useState(null)

    useEffect(() => {
    
        axios.get(`${import.meta.env.VITE_SERVER_URL}/bikes`)
        .then((response) => {
            setAllBike(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    if(allBike === null) {
        return <h3>...buscando Bicicletas</h3>
    }

  return (
    <div className="HomePage">
      {allBike.map((eachBike) => {
        return (<CardBikes key={eachBike.id} eachBike={eachBike} />)
      })}
    </div>
  );
}

export default HomePage;
