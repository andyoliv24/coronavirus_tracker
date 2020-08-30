import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViruses, faVirusSlash, faVirus, faCloud } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container-box1">
        <p> <FontAwesomeIcon icon={faVirus} size="2x" className="footer-icons" /> &nbsp; About us</p>
        <p><FontAwesomeIcon icon={faVirusSlash} size="2x" /> &nbsp; Devs</p>
        <p> <FontAwesomeIcon icon={faViruses} size="2x" /> &nbsp; More</p>
      </div>

      <div className="footer_container-box2">
        <p><FontAwesomeIcon icon={faCloud} />&nbsp;Powered by Team 9</p>
      </div>

    </div>
  );
}

export default Footer;