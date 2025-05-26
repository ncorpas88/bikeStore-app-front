import { Link } from "react-router-dom";


function AboutPage() {
  return (
    <div className="About">
      <h1>About</h1>
      <Link to="https://github.com/ncorpas88/bikeStore-app-front" >
        <img src="src/images/git.png" alt="logo-github" width={200}/>
      </Link>
      <Link to="www.linkedin.com/in/ncorpas" >
        <img src="src/images/logolink.png" alt="logo-linkedin" width={200}/>
      </Link>
    </div>
  );
}

export default AboutPage;
