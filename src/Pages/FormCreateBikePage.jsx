import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function FormCreateBikePage() {

    const navigate = useNavigate()
    const [name, setName] = useState()
    const [discipline, setDiscipline] = useState()
    const [frame_material, setFrame_material] = useState()
    const [color, setColor] = useState()
    const [weight_kg, setWeight_kg] = useState() 
    const [image, setImage] = useState()

    const handleSumit = (e) => {
      e.preventDefault()

      const newBike = {
        name: name,
        discipline: discipline,
        frame_material: frame_material,
        color: color,
        weight_kg: weight_kg,
        image: image,
      }

      axios.post(`${import.meta.env.VITE_SERVER_URL}/bikes`, newBike)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
    }

  return (
    <div className="CreateBike">
      <h2>Add Bike</h2>

      <form onSubmit={handleSumit}>
        <label>Name:</label>
        <input 
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />

        <br />
        <label>Discipline:</label>
        <input 
        type="text"
        discipline="discipline"
        value={discipline}
        onChange={(e) => setDiscipline(e.target.value)} 
        />

        <br />
        <label>Frame Material:</label>
        <input 
        type="text"
        frame_material="frame-material"
        value={frame_material}
        onChange={(e) => setFrame_material(e.target.value)} 
        />

        <br />
        <label>Color:</label>
        <input 
        type="text"
        color="color"
        value={color}
        onChange={(e) => setColor(e.target.value)} 
        />
        
        <br />
        <label>Weight kg:</label>
        <input 
        type="text"
        weight_kg="weight_kg"
        value={weight_kg}
        onChange={(e) => setWeight_kg(e.target.value)} 
        />

        <br />
        <label>Image URL:</label>
        <input 
        type="text"
        image="image url"
        value={image}
        onChange={(e) => setImage(e.target.value)} 
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormCreateBikePage;
