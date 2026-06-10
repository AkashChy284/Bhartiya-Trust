import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {/* ========== FAQ SECTION ========== */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <div className="question-mark">?</div>
          </div>

          <div className="faq-right">
            <h2 className="faq-heading">FAQs</h2>
            <ul className="faq-list">
              <li>ARE THERE ANY TAX BENEFITS INVOLVED WHILE DONATING TO BHARTIYA WELFARE TRUST?</li>
              <li>WHAT IS THE PROCESS TO AVAIL TAX EXEMPTION CERTIFICATE?</li>
              <li>HOW CAN I DONATE ONLINE?</li>
              <li>IS THERE ANY ADVANTAGE TO DONATING ONLINE?</li>
              <li>IS IT SAFE TO GIVE MY CREDIT CARD DETAILS ONLINE?</li>
              <li>HOW DO I CONTACT YOU REGARDING MY DONATION?</li>
              <li>IS IT COMPLICATED TO MAKE A DONATION ONLINE?</li>
              <li>HOW SAFE IS MY PERSONAL INFORMATION WITH BHARTIYA WELFARE TRUST?</li>
            </ul>
          </div>
        </div>
        <div className="faq-bottom-line"></div>
      </section>

      {/* ========== MAIN FOOTER ========== */}
      <section className="main-footer">
        <div className="newsletter-section">
          <h3>SIGN UP FOR THE NEWSLETTER HERE:</h3>
          <div className="newsletter-inputs">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-logo">
            <img src="/logo1.png" alt="Bhartiya Welfare trust" />
            <p>Also known as Save the Children</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>ABOUT US</h4>
              <a href="#">Overview</a>
              <a href="#">Mission & Vision</a>
              <a href="#">Financials</a>
              <a href="#">Raksha Journal</a>
              <a href="#">Our Team</a>
              <a href="#">Governing Council</a>
              <a href="#">Our Donor Wall</a>
            </div>

            <div>
              <h4>WHAT WE DO?</h4>
              <a href="#">Education</a>
              <a href="#">Health and Nutrition</a>
              <a href="#">Our Programmes</a>
              <a href="#">Engagement with Government</a>
              <a href="#">Resilience</a>
              <a href="#">Social Inclusion</a>
              <a href="#">Child Protection</a>
              <a href="#">Humanitarian</a>
              <a href="#">Child Welfare</a>
            </div>

            <div>
              <h4>TAKE ACTION</h4>
              <a href="#">Donate</a>
              <a href="#">Volunteer</a>
              <a href="#">Donation Receipt</a>
              <a href="#">Other Ways To Help</a>
              <a href="#">High Value Gifting</a>
              <a href="#">Child Safeguarding</a>
              <a href="#">Contact Us</a>
              <a href="#">Careers</a>
            </div>

            <div>
              <h4>RESOURCES</h4>
              <a href="#">Latest Blog</a>
              <a href="#">Press Coverage</a>
              <a href="#">News</a>
              <a href="#">Reports</a>
              <a href="#">FAQs</a>
              <a href="#">Webstories</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-text">
          <p>
            Disclaimer: Please note that the products mentioned are to illustrate activities and the
            change your donation can make to the lives of children. Bal Raksha Bharat, based on the
            need on the ground, will allocate resources to areas that need funds the most.
          </p>
          <p>
            As per the provisions of Indian Income Tax, a donor is required to give full name,
            complete address, PAN, and Aadhar (if available) for donations exceeding ₹50,000 as per
            section 80G of the Income Tax Act, 1961.
          </p>
        </div>

        <div className="footer-social">
          <p>Follow us on</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-copy">
          © 2025 Bhartiya Welfare Trust | All Rights Reserved
        </div>
      </section>
    </footer>
  );
}
