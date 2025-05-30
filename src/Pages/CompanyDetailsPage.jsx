import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CompanyDetailsPage() {
  const [allCompanies, setAllCompanies] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/companies`)
      .then((response) => {
        setAllCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("*");
      });
  }, []);

  if (allCompanies === null) {
    return (
      <div className="d-flex justify-content-center aling-items-center vh-100">
        <Spinner animation="grow" variant="dark" />;
        <br />
        <p>Loading Companies...</p>
      </div>
    )
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
