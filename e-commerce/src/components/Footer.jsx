import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
} from "react-icons/fa";

import "../styles/components.css";

function Footer() {
  return (
    <footer className="footer">

    

     

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h1>
            Nexus<span>Store</span>
          </h1>

          <p>
            Discover premium products with secure shopping,
            lightning-fast delivery and exceptional customer support.
          </p>

          <div className="social-icons">
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaFacebookF/></a>
            <a href="#"><FaTwitter/></a>
          </div>

        </div>



        {/* Company */}

        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>

        </div>



        {/* Support */}

        <div className="footer-column">

          <h3>Customer Care</h3>

          <a href="#">My Account</a>
          <a href="#">Track Order</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>

        </div>



        {/* Contact */}

        <div className="footer-column contact">

          <h3>Contact Us</h3>

          <p><FaEnvelope/> support@nexus.com</p>

          <p><FaPhoneAlt/> +91 98765 43210</p>

          <p><FaMapMarkerAlt/> Himachal Pradesh, India</p>

          <div className="payment-icons">

            <FaCcVisa/>

            <FaCcMastercard/>

            <FaCcPaypal/>

          </div>

        </div>

      </div>



      <div className="footer-bottom">

        <p>
          © 2026 <strong>NexusStore</strong>. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ for Smart Shopping.
        </p>

      </div>

    </footer>
  );
}

export default Footer;