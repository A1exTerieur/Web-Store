import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {Link } from 'react-router-dom';
import logo from "../../image/logo.png"

export default function Header() {





  return (

  <div>

    <nav id='nav'className="navbar fixed-top navbar-light ">

      <Link id='logo' className="navbar-brand" to="/">
        <img href='https://www.google.com/' src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Web Store
      </Link>

        <Link className="btn btn-primary" to="/Jeuxvideo">Jeux Video</Link>
        <Link className="btn btn-primary" to="/Informatique">Informatique</Link>
        <Link className="btn btn-primary" to="/Sport">Sport</Link>
        <Link className="btn btn-primary" to="/Animaux">Animaux</Link>
        <Link className="btn btn-primary" to="/Livres">Livres</Link>


      <form id='input-head' className="form-inline">

        <input  type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />


      </form>
    </nav>
  </div>

  );

}
