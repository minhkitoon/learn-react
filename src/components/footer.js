import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Copyright © 2023 Pacifico. Designed by Minh</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;