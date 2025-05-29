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
    }
  };

  if (details === null) {
    return (
      <div className="d-flex justify-content-center aling-items-center vh-100">
        <Spinner animation="grow" variant="dark" />;
        <p>Loanding bike details...</p>
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
        <h2>Discipline: {details.discipline}</h2>
        <h2>Frame Material :{details.frame_material}</h2>
        <h2>Color :{details.color}</h2>
        <h2>Weight without pedals: {details.weight_kg}</h2>
      </div>
      <hr />
      <div className="companydetails">
        <h2>Company: {details.company?.name}</h2>
        <h2>Country: {details.company?.country}</h2>
        <h2>Since: {details.company?.founded}</h2>
        <h2>Web Site: {details.company?.website}</h2>
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
