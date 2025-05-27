import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function CardBikes(props) {
  return (
    <Card className="CardBikes">
      <Link to={`/details/${props.eachBike.id}`}>
        <Card.Img
          variant="top"
          src={props.eachBike.image}
          alt={props.eachBike.image}
        />
      </Link>
      <Card.Title>{props.eachBike.name}</Card.Title>
      <Card.Body>
        <Card.Text>{props.eachBike.discipline}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardBikes;
