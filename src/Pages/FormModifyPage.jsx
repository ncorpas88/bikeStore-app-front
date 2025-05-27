import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormModifyPage() {
  const params = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [frame_material, setFrame_material] = useState("");
  const [color, setColor] = useState("");
  const [weight_kg, setWeight_kg] = useState("");
  const [image, setImage] = useState("");
  const [companyId, setCompanyId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateBike = {
      name: name,
      discipline: discipline,
      frame_material: frame_material,
      color: color,
      weight_kg: weight_kg,
      image: image,
      companyId: companyId,
    };

    axios
      .put(
        `${import.meta.env.VITE_SERVER_URL}/bikes/${params.bikeId}`,
        updateBike
      )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Modify Bike</h1>

      <Form className="mx-5 p-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discipline:</Form.Label>
          <Form.Control
            type="text"
            name="discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Frame Material:</Form.Label>
          <Form.Control
            type="text"
            name="frame-material"
            value={frame_material}
            onChange={(e) => setFrame_material(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Color:</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Weight kg:</Form.Label>
          <Form.Control
            type="text"
            name="weight_kg"
            value={weight_kg}
            onChange={(e) => setWeight_kg(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="text"
            name="image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CompanyId:</Form.Label>
          <Form.Control
            type="text"
            name="companyId"
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          />
          <Form.Text className="text-muted">
            Trek Id: 1234, Orbea Id: 5678, Focus Id: 9101
          </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit">Update</Button>
      </Form>
    </div>
  );
}

export default FormModifyPage;
