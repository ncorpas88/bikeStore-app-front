import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

function DetailsBikePage() {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/bikes/${
          params.bikeId
        }?_expand=company`
      );
      setDetails(response.data);
    } catch (error) {
      console.log(error);
      navigate("*");
    }
  };

  if (details === null) {
    return (
      <div className="d-flex justify-content-center aling-items-center vh-100">
        <Spinner animation="grow" variant="dark" />;
        <br />
        <p>Loading bike details...</p>
      </div>
    )
  }

  const deleteBike = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/bikes/${params.bikeId}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="DetailsBike">
      <h1>Details Bike</h1>
      <h2>Model: {details.name}</h2>
      <img src={details.image} alt="image-Bike" />
      <div className="bikedetails">
        <h2>Discipline: <span>{details.discipline}</span></h2>
        <h2>Frame Material: <span>{details.frame_material}</span></h2>
        <h2>Color: <span>{details.color}</span></h2>
        <h2>Weight without pedals: <span>{details.weight_kg}</span></h2>
      </div>
      <hr />
      <div className="companydetails">
        <h2>Company: <span>{details.company?.name}</span></h2>
        <h2>Country: <span>{details.company?.country}</span></h2>
        <h2>Since: <span>{details.company?.founded}</span></h2>
        <a href={details.company?.website} target="_blank">
        <h2>Web Site: <span>{details.company?.website}</span></h2>
        </a>
        <img
          src={details.company?.image}
          alt="logoCompany"
          style={{ width: "100px", height: "auto" }}
        />
      </div>

      <Link to={`/formModifyPage/${params.bikeId}`}>
        <Button variant="success">Update</Button>
      </Link>

      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>"Warning"</Modal.Title>
        </Modal.Header>
        <Modal.Body>"Are you sure you want to delete?"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteBike}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailsBikePage;
