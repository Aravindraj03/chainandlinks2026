import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HeroBanner.css";

/* =========================================
   REUSABLE HERO ENQUIRY FORM
========================================= */

function HeroEnquiryForm({ projectName = "Home" }) {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple API calls
    if (isSubmitting) return;

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

    if (!payload.name) {
      alert("Please enter your name");
      return;
    }

    if (!/^[0-9]{10}$/.test(payload.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Disable button immediately after validation
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://chainandlinks.com/sendmail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

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

        // Allow retry if API fails
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      alert("Something went wrong, please try again.");

      // Allow retry if API fails
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero-enquiry-card">
      <h2>Enquire Now</h2>
      <p>Get in touch for more information</p>

      <form onSubmit={handleSubmit}>

        {/* NAME */}
        <div className="hero-form__field">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            autoComplete="name"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* EMAIL */}
        <div className="hero-form__field">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="email"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* PHONE */}
        <div className="hero-form__field">
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            maxLength="10"
            inputMode="numeric"
            autoComplete="tel"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* SOURCE */}
        <input
          type="hidden"
          name="source"
          value={projectName}
        />

        {/* SUBMIT */}
        <button
          type="submit"
          className="hero-form__btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book a Free Site Visit"}
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

      <div className="home-hero__banner">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/Banner/home-mobile-banner.jpeg"
          />

          <img
            src="/images/Banner/home-banner.jpeg"
            alt="Chain and Links premium plots and villas in Chennai"
            className="home-hero__bg"
          />
        </picture>
      </div>

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

      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={project.MobilebannerImage}
        />

        <img
          src={project.DesktopbannerImage}
          alt={`${project.name} premium plots in ${project.location}, Chennai`}
          className="project-hero__bg"
        />
      </picture>

      <div className="project-hero__form-wrapper">
        <HeroEnquiryForm projectName={project.name} />
      </div>

    </section>
  );
}