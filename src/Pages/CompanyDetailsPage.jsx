import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';


function CompanyDetailsPage() {
  const [allCompanies, setAllCompanies] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/companies`)
      .then((response) => {
        setAllCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allCompanies === null) {
    return <Spinner animation="grow" variant="info" />;
  }

  return (
    <div className="CompaniesDetailsPage">
      {allCompanies.map((eachCompany) => {
        return (
          <div key={eachCompany.id}>
            <h2>{eachCompany.name}</h2>
            <img src={eachCompany.image} alt={eachCompany.image} width={200}/>
            <h3>{eachCompany.country}</h3>
            <h3>{eachCompany.founded}</h3>
            <h4>{eachCompany.website}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default CompanyDetailsPage;
