import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__body">
        <div className="footer__cols">
          <h4 className="footer__text">Audio and Subtitles</h4>
          <h4 className="footer__text">Media Center</h4>
          <h4 className="footer__text">Privacy</h4>
          <h4 className="footer__text">Contact Us</h4>

          <div>
              <h4 className="footer__copyright"> © Copyright ThandePAPA</h4>
          </div>
        </div>
        <div className="footer__cols">
          <h4 className="footer__text">Investor Relations</h4>
          <h4 className="footer__text">Audio description</h4>
          <h4 className="footer__text">Jobs</h4>
        </div>
        <div className="footer__cols">
          <h4 className="footer__text">Help Center</h4>
          <h4 className="footer__text">Legal Notices</h4>
          <h4 className="footer__text">Cookie Prefrences</h4>
        </div>
        <div className="footer__cols">
          <h4 className="footer__text">Gift Cards</h4>
          <h4 className="footer__text">Terms of Use</h4>
          <h4 className="footer__text">Corporate Information</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
