import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import PlaceholderImage from "../Common/PlaceholderImage.jsx";
import { useReveal } from "../../hooks/useReveal.js";
import "./Proximity.css";

export default function Proximity({ items = [], projectName }) {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useReveal();

  return (
    <section className="section section--gradient proximity-section" ref={ref}>
      <div className="container proximity-grid">
        <div className="proximity-accordion reveal">
          <h2 className="section-title">Proximity</h2>
          <div className="proximity-accordion__list mt-24">
            {items.map((cat, i) => (
              <div
                key={cat.category}
                className={`proximity-accordion__item ${openIndex === i ? "is-open" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  {cat.category}
                  <ChevronDown
                    size={18}
                    className={openIndex === i ? "is-rotated" : ""}
                  />
                </button>
                <div className="proximity-accordion__panel">
                  <p className="proximity-accordion__note">{cat.note}</p>
                  <ul>
                    {cat.items.map((it) => (
                      <li key={it.name}>
                        <span>{it.name}</span>
                        <em>{it.distance}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="proximity-map reveal reveal-delay-1">
          {projectName === "Crossway Springs" ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.274717060054!2d80.1732621!3d12.860346800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259704dee9edf%3A0xa59e2834cabf9ea9!2sCrossway%20Springs%20-%20by%20Stone%20%26%20Acres!5e1!3m2!1sen!2sin!4v1789116271361!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Crossway Springs Location Map"
            />
          ) : projectName === "Amber" ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14789.472788348165!2d80.17350195!3d12.853999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525976fe0fccb3%3A0x4a8e9a8c87836ac7!2sPonmar%2C%20Moolacheri%2C%20Tamil%20Nadu%20600127!5e1!3m2!1sen!2sin!4v1789116435351!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Amber Location Map"
            />
          ) : projectName === "Varam" ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.169956961119!2d79.9848458!3d12.8674558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f1001099a403%3A0x5bc8658881f4169e!2sStone%20and%20Acres%20Varam!5e1!3m2!1sen!2sin!4v1789116529666!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Varam Location Map"
            />
          ) : (
            <PlaceholderImage
              name={`${projectName.toLowerCase()}-location-map`}
              label={`Map — ${projectName} & Surroundings`}
              ratio="4/3"
            />
          )}

          <div className="proximity-map__badge">
            <MapPin size={16} /> {projectName}
          </div>
        </div>
      </div>
    </section>
  );
}
