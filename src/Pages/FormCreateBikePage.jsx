import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormCreateBikePage() {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [frame_material, setFrame_material] = useState("");
  const [color, setColor] = useState("");
  const [weight_kg, setWeight_kg] = useState("");
  const [image, setImage] = useState("");
  const [companyId, setCompanyId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBike = {
      name: name,
      discipline: discipline,
      frame_material: frame_material,
      color: color,
      weight_kg: weight_kg,
      image: image,
      companyId: companyId,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/bikes`, newBike)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="CreateBike">
      <h2>Add Bike</h2>

      <Form className="mx-5 p-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discipline:</Form.Label>
          <Form.Control
            type="text"
            name="discipline"
            value={discipline}
            required
            onChange={(e) => setDiscipline(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Frame Material:</Form.Label>
          <Form.Control
            type="text"
            name="frame-material"
            value={frame_material}
            required
            onChange={(e) => setFrame_material(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Color:</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={color}
            required
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Weight kg:</Form.Label>
          <Form.Control
            type="text"
            name="weight_kg"
            value={weight_kg}
            required
            onChange={(e) => setWeight_kg(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="text"
            name="image url"
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CompanyId:</Form.Label>
          <Form.Control
            type="text"
            name="companyId"
            value={companyId}
            required
            onChange={(e) => setCompanyId(e.target.value)}
          />
          <Form.Text className="text-muted">
            Trek Id: 1234, Orbea Id: 5678, Focus Id: 9101,
            Specialized Id: 5855, Megamo Id: 4121, Scott Id: 4182.
          </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default FormCreateBikePage;
