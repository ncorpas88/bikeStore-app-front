import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function DetailsBikePage() {

    const params = useParams()

    const [details, setDetails] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/bikes/${params.bikeId}`)
          setDetails(response.data)  
        } catch (error) {
          console.log(error)
        }
    }

    if (details === null) {
        return <h3>...buscando detalles</h3>
    }

  return (
    <div className="DetailsBike">
      <h1>Deatails Bike</h1>
      <h2>{details.name}</h2>
      <img src={details.image} alt="image-Bike" />
      <h2>{details.discipline}</h2>
      <h2>{details.frame_material}</h2>
      <h2>{details.color}</h2>
      <h2>{details.weight_kg}</h2>

    </div>
  );
}

export default DetailsBikePage;
