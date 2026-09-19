import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { projectList } from "../../data/projects.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__logo">
            CHAIN & LINKS
          </p>
          <p className="site-footer__tagline">
            Premium plotted developments and villa communities across Chennai.
          </p>
          <div className="site-footer__social">
            <a
              href="https://www.facebook.com/share/1DYRYwytGA/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>

            <a
              href="https://www.instagram.com/chainandlinks?stkn=YjJjcGZrZ2NvMnkw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            {/* <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}><Youtube size={17} /></a>
            <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><Linkedin size={17} /></a> */}
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Quick Links</p>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Our Projects</p>
          {projectList.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`}>
              {p.name}
            </Link>
          ))}
        </div>

        <div className="site-footer__col site-footer__contact">
          <p className="site-footer__heading">Our Address</p>
          <p>
            <MapPin size={16} /> No.78/2 (138/2), L.B Road,
            <br />
            Thiruvanmiyur, Chennai - 600 041,
            <br />
            Tamil Nadu
          </p>
          <p>
            <Phone size={16} /> <a href="tel:+918438598947">+91 8438 598947</a>
          </p>
          <p>
            <Mail size={16} />{" "}
            <a href="mailto:Contact@chainandlinks.com">
              Contact@chainandlinks.com
            </a>
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} Chain &amp; Links. All rights
            reserved.
          </p>
          <Link to="/contact">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
