import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function DetailsBikePage() {

    const params = useParams()

    const [details, setDetails] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/bikes/${params.bikeId}?_expand=company`)
          setDetails(response.data)  
        } catch (error) {
          console.log(error)
        }
    }

    if (details === null) {
        return <h3>...buscando detalles</h3>
    }

    const deleteBike = () => {
      axios.delete(`${import.meta.env.VITE_SERVER_URL}/bikes/${params.bikeId}`)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
    }

  return (
    <div className="DetailsBike">
      <h1>Details Bike</h1>
      <h2>{details.name}</h2>
      <img src={details.image} alt="image-Bike" />
      <h2>{details.discipline}</h2>
      <h2>{details.frame_material}</h2>
      <h2>{details.color}</h2>
      <h2>{details.weight_kg}</h2>
      <hr />
      <h2>{details.company?.name}</h2>
      <h2>{details.company?.country}</h2>
      <h2>{details.company?.founted}</h2>
      <h2>{details.company?.website}</h2>
      <img src={details.company?.image} alt="logoCompany" style={{width: "100px", height: "auto"}} />

      <Link to={`/formModifyPage/${params.bikeId}`}>
        <button>Update</button>
      </Link>
      <button onClick={deleteBike}>Delete</button>
    </div>
  );
}

export default DetailsBikePage;
