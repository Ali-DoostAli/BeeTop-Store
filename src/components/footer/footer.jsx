import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import moment from "moment";

export function Footer() {
  return (
    <div className="footer-container ">
      <section className="footer-subscription">
        <p className="footer-subscription-heading text-warning">
          Join our website to see more.
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items text-warning">
            <h2 className="text-warning">About Us</h2>
            <Link to="/sign-up" className="text-warning">
              How it works
            </Link>
            <Link to="/" className="text-warning">
              Testimonials
            </Link>
            <Link to="/" className="text-warning">
              Careers
            </Link>
            <Link to="/" className="text-warning">
              Investors
            </Link>
            <Link to="/" className="text-warning">
              Terms of Service
            </Link>
          </div>
          <div className="footer-link-items">
            <h2 className="text-warning">Contact Us</h2>
            <Link to="/" className="text-warning">
              Contact
            </Link>
            <Link to="/" className="text-warning">
              Support
            </Link>
            <Link to="/" className="text-warning">
              Destinations
            </Link>
            <Link to="/" className="text-warning">
              Sponsorships
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="text-warning">Videos</h2>
            <Link to="/" className="text-warning">
              Submit Video
            </Link>
            <Link to="/" className="text-warning">
              Ambassadors
            </Link>
            <Link to="/" className="text-warning">
              Agency
            </Link>
            <Link to="/" className="text-warning">
              Influencer
            </Link>
          </div>
          <div className="footer-link-items">
            <h2 className="text-warning">Social Media</h2>
            <Link to="/" className="text-warning">
              Instagram
            </Link>
            <Link to="/" className="text-warning">
              Facebook
            </Link>
            <Link to="/" className="text-warning">
              Youtube
            </Link>
            <Link to="/" className="text-warning">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap text-warning">
          <div className="footer-logo text-warning">
            <Link to="/" className="social-logo text-warning">
              BeeTop
              <img
                className="ml-1"
                src="images/bee-logo.png"
                style={{ marginBottom: "4PX" }}
                width="30px"
                alt=""
              />
            </Link>
          </div>
          <small className="website-rights text-warning">
            BeeTop © {moment().format("dddd, MMMM Do YYYY")}
          </small>
          <div className="social-icons mb-3">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-warning" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-warning" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube  text-warning" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-warning" />
            </Link>
            <Link
              className="social-icon-link twitter "
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-warning" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
