import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Protect Thank You page
  useEffect(() => {
    if (!location.state?.submitted) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  // Handle responsive image
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* =========================================
          DESKTOP
      ========================================= */}

      {!isMobile && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Desktop Thank You Image */}
          <img
            src="/images/Banner/thankyoubanner.jpg"
            alt="Thank You"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      )}

      {/* =========================================
          MOBILE
      ========================================= */}

      {isMobile && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Mobile Thank You Image */}
          <img
            src="/images/Banner/thankyoureel.jpg"
            alt="Thank You"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HomeThankYou;