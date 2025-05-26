import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Sidebar</h2>
      <Link to="/companyDetailsPage">
        <button>Companies</button>
      </Link>
      <Link to="/formCreateBikePage">
        <button>Create Bike</button>
      </Link>
    </div>
  );
}

export default Sidebar;
