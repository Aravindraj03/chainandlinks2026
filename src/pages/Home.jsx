import { useRef, useState } from "react";
import SEO from "../components/SEO/SEO.jsx";
import { HomeHeroBanner } from "../components/Hero/HeroBanner.jsx";
import { ProjectGrid } from "../components/Projects/ProjectCard.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import EnquiryForm from "../components/Forms/EnquiryForm.jsx";
import FloatingActions, {
  ContactTab,
} from "../components/FloatingActions/FloatingActions.jsx";
import { projectList } from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";
import "../styles/pages.css";
import AboutUsImage from "../../public/images/page-images/about-img.png";

export default function Home() {
  const aboutRef = useReveal();
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(
      () =>
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        }),
      50,
    );
  };

  return (
    <div>
      <SEO page="home" />

      <HomeHeroBanner onEnquireClick={scrollToForm} />

      <section className="section" ref={aboutRef}>
        <div className="container about-us-grid">
          <div className="about-us-media reveal">
            <div className="about-us-media__img">
              <img
                src="/images/page-images/about-img.png"
                alt="Chain & Links Real Estate Developer in Chennai"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <span className="eyebrow">About Chain & Links</span>

            <h2 className="section-title">
              Trusted Real Estate Developer in Chennai
            </h2>

            <p className="lead mt-16">
              Chain &amp; Links is a Chennai-based real estate developer
              specializing in DTCP-approved plots and premium gated villa
              communities. We focus on transparent documentation, quality
              infrastructure, and thoughtfully planned communities that offer
              lasting value for families and investors.
            </p>

            <p className="lead mt-16">
              From selecting the right location to registration, we ensure a
              transparent and hassle-free property buying experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--gradient" id="projects">
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: 640, marginInline: "auto" }}
          >
            <span className="eyebrow">Our Projects</span>
            <h2 className="section-title">Explore Our Communities</h2>
            <p className="lead mt-16">
              Three distinct developments, one shared promise of quality and
              connectivity.
            </p>
          </div>
          <div className="mt-48">
            <ProjectGrid projects={projectList} />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section section--soft" ref={formRef}>
        <div className="container" style={{ maxWidth: 560 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="eyebrow">Get Started</span>
            <h2 className="section-title">Talk to Our Team</h2>
          </div>
          <EnquiryForm id="home-enquiry" />
        </div>
      </section>

      <FloatingActions onEnquireClick={scrollToForm} />
      <ContactTab onClick={scrollToForm} />
    </div>
  );
}
