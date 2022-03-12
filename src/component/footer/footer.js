import "../styles/footer.css";
import React from "react";
import {Link} from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <div className="Foot">
      <div className="a">
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Smart India Hackathon 2022 </h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6">
                
                <h3 className="title"> </h3>
                <ul>
                  <li className="list-unstyled">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/er">ER-diagram</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/db">Database</Link>
                  </li>
                  <li className="list-unstyled">
                    {/* <a href="#!"></a> */}
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.mdbootstrap.com"> </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}

export default Footer;
