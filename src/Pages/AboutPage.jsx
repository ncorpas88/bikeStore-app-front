import { Link } from "react-router-dom";


function AboutPage() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <img src="/images/yo.webp" alt="me" width={200} />
      <h2>Developer: Natanael Corpas Rivero</h2>
      <p>I developed this website to enhance and optimize bicycle storage management for a specialized bike shop.
         The project was carried out as part of the Ironhack Bootcamp, integrating practical solutions with a modern, 
         intuitive design focused on delivering an exceptional user experience.
      </p>

      <a href="https://github.com/ncorpas88/bikeStore-app-front" target="_blank" >
        <img src="images/git.png" alt="logo-github" width={200}/>
      </a>
      <a href="https://www.linkedin.com/in/ncorpas" target="_blank">
        <img src="images/logolink.png" alt="logo-linkedin" width={200}/>
      </a>
      <img src="images/map.png" alt="map" width={400}/>
    </div>
  );
}

export default AboutPage;
