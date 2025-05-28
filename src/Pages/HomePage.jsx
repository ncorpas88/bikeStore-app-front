import { useEffect, useState } from "react";
import CardBikes from "../Components/CardBikes";
import axios from "axios"
import { useSearchParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


function HomePage() {

    const [allBike, setAllBike] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const discipline = searchParams.get("discipline")

    const handleFilterBike = (event) => {
      if (event.target.value === "") {
        setSearchParams({})
      }else {
        setSearchParams({"discipline": event.target.value})
      }
      
    }


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
        return <Spinner animation="grow" variant="info" />
        
    }

  return (
    <div className="HomePage">

      <Form.Select size="lg" onChange={handleFilterBike} name="" id="">
        <option value="">All Bike</option>
        <option value="MTB">MTB</option>
        <option value="Road">Road</option>
        <option value="Urban">Urban</option>
        <option value="Gravel">Gravel</option>
        <option value="Electric">Electric</option>
      </Form.Select>

      {allBike
      .filter((eachBikeDis) => {
        if (discipline === null) {
          return true
        }else {
           return eachBikeDis.discipline === discipline
        }
     
    })
      .map((eachBike) => {
        return (<CardBikes key={eachBike.id} eachBike={eachBike} />)
      })}
    </div>
  );
}

export default HomePage;
