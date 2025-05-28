import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

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
          <Card className="CardCompany" key={eachCompany.id}>
            <Card.Img
              src={eachCompany.image}
              alt={eachCompany.image}
              width={200}
            />
            <Card.Title>{eachCompany.name}</Card.Title>
            <Card.Body>
              <Card.Text>Made in: {eachCompany.country}</Card.Text>
              <Card.Text>Since: {eachCompany.founded}</Card.Text>
              <Card.Text>{eachCompany.website}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CompanyDetailsPage;
