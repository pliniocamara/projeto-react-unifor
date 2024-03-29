import React from 'react';
import logo from "../src/images/logo.png";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-lg-5">  
              <Link className="nav-link" to="/Home"><img src={logo} style={{width:100, marginTop: -7}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Cadastro">Cadastro</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Faq">FAQ</Link></li>
                      </ul>
                  </div>
            </div>
        </nav>
    </div>
  );
}

export default Header;