import { Link } from "react-router-dom";

function CardBikes(props) {
  return (
    <div className="CardBikes">
      <Link to={`/details/${props.eachBike.id}`}>
        <h2>{props.eachBike.name}</h2>
        <h3>{props.eachBike.discipline}</h3>
        <img src={props.eachBike.image} alt={props.eachBike.image} />
      </Link>
    </div>
  );
}

export default CardBikes;
