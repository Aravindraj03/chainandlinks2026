import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";

/* =========================================
   REUSABLE HERO ENQUIRY FORM
========================================= */

function HeroEnquiryForm({ projectName = "Home" }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim(),
      source: projectName,
    };

    // ================================
    // VALIDATION
    // ================================

    // Name
    if (!payload.name) {
      alert("Please enter your name");
      return;
    }

    // Phone
    if (!/^[0-9]{10}$/.test(payload.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("https://chainandlinks.com/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.text();

      console.log("Server response:", result);

      if (response.ok) {
        form.reset();

        let thankYouPath = "/";

        if (projectName === "Home") {
          thankYouPath = "/home/thank-you";
        } else if (projectName === "Varam") {
          thankYouPath = "/varam/thank-you";
        } else if (projectName === "Amber") {
          thankYouPath = "/amber/thank-you";
        } else if (projectName === "Crossway Springs") {
          thankYouPath = "/crossway-springs/thank-you";
        }

        navigate(thankYouPath, {
          state: {
            submitted: true,
          },
        });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="hero-enquiry-card">
      {/* =================================
          FORM HEADER
      ================================= */}

      <h2>Enquire Now</h2>

      <p>Get in touch for more information</p>

      <form onSubmit={handleSubmit}>
        {/* =================================
            NAME
        ================================= */}

        <div className="hero-form__field">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            autoComplete="name"
            required
          />
        </div>

        {/* =================================
            EMAIL
        ================================= */}

        <div className="hero-form__field">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="email"
            required
          />
        </div>

        {/* =================================
            PHONE
        ================================= */}

        <div className="hero-form__field">
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            maxLength="10"
            inputMode="numeric"
            autoComplete="tel"
            required
          />
        </div>

        {/* =================================
            SOURCE
            Hidden field
        ================================= */}

        <input type="hidden" name="source" value={projectName} />

        {/* =================================
            SUBMIT
        ================================= */}

        <button type="submit" className="hero-form__btn">
          Book a Free Site Visit
        </button>
      </form>
    </div>
  );
}

/* =========================================
   HOME HERO BANNER
========================================= */

export function HomeHeroBanner({ onEnquireClick }) {
  return (
    <section className="home-hero">
      {/* =================================
          HOME BANNER
      ================================= */}

      <div className="home-hero__banner">
        <picture>
          {/* Mobile Banner */}
          <source
            media="(max-width: 768px)"
            srcSet="/images/Banner/home-mobile-banner.jpeg"
          />

          {/* Desktop Banner */}
          <img
            src="/images/Banner/home-banner.jpeg"
            alt="Chain and Links premium plots and villas in Chennai"
            className="home-hero__bg"
          />
        </picture>
      </div>

      {/* =================================
          HOME FORM
      ================================= */}

      <div className="home-hero__form-wrapper">
        <HeroEnquiryForm projectName="Home" />
      </div>
    </section>
  );
}

/* =========================================
   PROJECT HERO BANNER
========================================= */

export function ProjectHeroBanner({ project, onEnquireClick }) {
  return (
    <section className="project-hero">
      {/* =================================
          PROJECT BANNER
      ================================= */}

      <picture>
        {/* Mobile Banner */}
        <source media="(max-width: 768px)" srcSet={project.MobilebannerImage} />

        {/* Desktop Banner */}
        <img
          src={project.DesktopbannerImage}
          alt={`${project.name} premium plots in ${project.location}, Chennai`}
          className="project-hero__bg"
        />
      </picture>

      {/* =================================
          PROJECT FORM
      ================================= */}

      <div className="project-hero__form-wrapper">
        <HeroEnquiryForm projectName={project.name} />
      </div>
    </section>
  );
}
