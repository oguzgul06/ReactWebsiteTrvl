import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/?hl=tr">
              <Link to="/">Instagram</Link>
            </a>
            <a href="https://tr-tr.facebook.com/">
              <Link to="/">Facebook</Link>
            </a>
            <a href="https://www.youtube.com/">
              <Link to="/">Youtube</Link>
            </a>
            <a href="https://twitter.com/?lang=tr">
              <Link to="/">Twitter</Link>
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">TRVL © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <a href="https://tr-tr.facebook.com/">
                <i class="fab fa-facebook-f" />
              </a>
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a href="https://www.instagram.com/?hl=tr">
                <i class="fab fa-instagram" />
              </a>
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <a href="https://www.youtube.com/">
                <i class="fab fa-youtube" />
              </a>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <a href="https://twitter.com/?lang=tr">
                <i class="fab fa-twitter" />
              </a>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <a href="https://tr.linkedin.com/">
                <i class="fab fa-linkedin" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
