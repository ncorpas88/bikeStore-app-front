import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to="/companyDetailsPage">
        <Button variant="dark">Companies</Button>
      </Link>
      <img src="src/images/bikelogo.png" alt="bikelogo" width={100} />
      <Link to="/formCreateBikePage">
        <Button variant="dark">Create Bike</Button>
      </Link>
    </div>
  );
}

export default Sidebar;
