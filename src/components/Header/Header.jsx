import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { projectList } from "../../data/projects.js";
import "./Header.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
];

const Logo = "/images/Logo/C&L-header.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const closeTimer = useRef(null);

  // Header scroll state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Disable browser automatic scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  // Scroll to top whenever route changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileProjectsOpen(false);

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Wait until new page renders
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, [location.pathname]);

  // Mobile body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Desktop dropdown
  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 140);
  };

  // Navigation helper
  const handleNavigation = (path) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileProjectsOpen(false);

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    navigate(path);
  };

  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Header */}
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="container site-header__inner">

          {/* Logo */}
          <button
            type="button"
            className="site-header__logo"
            onClick={() => handleNavigation("/")}
            aria-label="Go to Chain & Links Home"
          >
            <img src={Logo} alt="Chain & Links" />
          </button>

          {/* Desktop Navigation */}
          <nav
            className="site-header__nav"
            aria-label="Primary"
          >
            <ul>

              {/* Home / About */}
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      isActive ? "is-active" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              {/* Projects Dropdown */}
              <li
                className="site-header__dropdown-wrap"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <button
                  type="button"
                  className={`site-header__dropdown-trigger ${
                    dropdownOpen ? "is-active" : ""
                  }`}
                  aria-expanded={dropdownOpen}
                  onClick={() =>
                    setDropdownOpen((value) => !value)
                  }
                >
                  Our Projects
                  <ChevronDown size={15} />
                </button>

                <div
                  className={`site-header__dropdown ${
                    dropdownOpen ? "is-open" : ""
                  }`}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  {projectList.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                    >
                      {project.name}
                    </Link>
                  ))}

                  <Link
                    to="/projects"
                    className="site-header__dropdown-all"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    View All Projects
                  </Link>
                </div>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "is-active" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>

            </ul>
          </nav>

          {/* Header Actions */}
          <div className="site-header__actions">

            <a
              href="tel:+918438598947"
              className="site-header__phone"
            >
              <Phone size={16} />
              +91 8438 598947
            </a>

            <button
              type="button"
              className="site-header__hamburger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`mobile-nav ${
          mobileOpen ? "is-open" : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >

        {/* Mobile Header */}
        <div className="mobile-nav__header">

          <button
            type="button"
            className="site-header__logo"
            onClick={() => handleNavigation("/")}
            aria-label="Go to Chain & Links Home"
          >
            <img src={Logo} alt="Chain & Links" />
          </button>

          <button
            type="button"
            className="site-header__hamburger"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        {/* Mobile Body */}
        <nav
          className="mobile-nav__body"
          aria-label="Mobile primary"
        >

          {/* Home / About */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Projects */}
          <button
            type="button"
            className="mobile-nav__link mobile-nav__link--trigger"
            aria-expanded={mobileProjectsOpen}
            onClick={() =>
              setMobileProjectsOpen((value) => !value)
            }
          >
            Our Projects

            <ChevronDown
              size={16}
              className={
                mobileProjectsOpen ? "is-rotated" : ""
              }
            />
          </button>

          <div
            className={`mobile-nav__submenu ${
              mobileProjectsOpen ? "is-open" : ""
            }`}
          >
            {projectList.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="mobile-nav__sublink"
                onClick={() => setMobileOpen(false)}
              >
                {project.name}
              </Link>
            ))}

            <Link
              to="/projects"
              className="mobile-nav__sublink"
              onClick={() => setMobileOpen(false)}
            >
              View All Projects
            </Link>
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className="mobile-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

        </nav>

        {/* Mobile Footer */}
        <div className="mobile-nav__footer">
          <a
            href="tel:+918438598947"
            className="btn btn-gold btn-block"
          >
            Call +91 8438 598947
          </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="mobile-nav__scrim"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}