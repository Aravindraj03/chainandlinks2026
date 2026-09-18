import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO/SEO.jsx";
import { ProjectHeroBanner } from "../Hero/HeroBanner.jsx";
import EnquiryForm from "../Forms/EnquiryForm.jsx";
import AboutSection from "../About/AboutSection.jsx";
import AmenitiesCarousel from "../Amenities/AmenitiesCarousel.jsx";
import Highlights from "../Highlights/Highlights.jsx";
import Configuration from "../Configuration/Configuration.jsx";
import Proximity from "../Proximity/Proximity.jsx";
import LayoutSection from "../Layout/LayoutSection.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import FAQAccordion from "../FAQ/FAQAccordion.jsx";
import FloatingActions, {
  ContactTab,
} from "../FloatingActions/FloatingActions.jsx";

export default function ProjectDetails({ project }) {
  const [formKey, setFormKey] = useState(0);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setFormKey((k) => k + 1);
  };

  return (
    <div>
      <SEO
        project={project}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ]}
      />

      <ProjectHeroBanner project={project} onEnquireClick={scrollToForm} />

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <span aria-current="page">/ {project.name}</span>
            </li>
          </ol>
        </div>
      </div>

      <AboutSection
        title={`Best Plots in ${project.location} - ${project.name}`}
        description={project.description}
        images={project.aboutImages}
        projectName={project.name}
      />

      <section className="section-tight section--gradient why-choose">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Why Choose {project.name}?</h2>
          <p
            className="lead mt-16"
            style={{ maxWidth: 760, marginInline: "auto" }}
          >
            {project.name} is one of Chennai&rsquo;s most promising real-estate
            destinations, offering a rare blend of connectivity, planned
            infrastructure and long-term value for both families and investors.
          </p>
        </div>
      </section>

      <AmenitiesCarousel items={project.amenities} />

      <Highlights items={project.highlights} projectName={project.name} />

      {project.slug === "varam" && (
        <Configuration
          key={`configuration-${project.slug}`}
          items={project.configurations}
        />
      )}

      <Proximity items={project.proximity} projectName={project.name} />

      {project.slug === "varam" && (
        <LayoutSection image={project.layoutImage} projectName={project.name} />
      )}
      <Gallery images={project.gallery} projectName={project.name} />

      <FAQAccordion items={project.faqs} />

      <FloatingActions onEnquireClick={scrollToForm} />
      <ContactTab onClick={scrollToForm} />
    </div>
  );
}
