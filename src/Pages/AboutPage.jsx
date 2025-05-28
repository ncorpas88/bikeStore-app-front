import { Link } from "react-router-dom";


function AboutPage() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <h2>Developer: Natanael Corpas Rivero</h2>
      <p>I developed this website to manage the storage of bicycles for 
        a bike shop. It was created as project for the Ironhack bootcamp.
      </p>

      <Link to="https://github.com/ncorpas88/bikeStore-app-front" >
        <img src="images/git.png" alt="logo-github" width={200}/>
      </Link>
      <Link to="www.linkedin.com/in/ncorpas" >
        <img src="images/logolink.png" alt="logo-linkedin" width={200}/>
      </Link>
      <img src="images/map.png" alt="map" width={600}/>
    </div>
  );
}

export default AboutPage;
