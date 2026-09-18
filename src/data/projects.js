// Central data source for all project detail pages.
// Real photography currently available: bannerImage / heroImage per project (see /public/images).
// Gallery, layout and amenity artwork still use styled placeholders — replace via /src/assets/<project>/
// once professional photography/master-plan files are supplied.

export const projects = {
  varam: {
    slug: "varam",

    DesktopbannerImage: "/images/Banner/varam-banner.jpeg",
    MobilebannerImage: "/images/Banner/varam-mobile-banner.jpeg",

    name: "Varam",

    tagline: "Premium Villa Plots in Padappai, Chennai",

    location: "Padappai",

    locationNote:
      "Located on the fast-growing Vandalur–Oragadam corridor with excellent connectivity to Tambaram, Oragadam and Kilambakkam.",

    heroImage: "/images/page-images/varam-card.png",

    actualPrice: "3,799",

    ourPrice: "3,299",

    priceUnit: "/sq.ft.",

    priceNote: "Last Few Plots Left",

    heroPeople: "varam-hero-people",

    description:
      "Varam is a premium 32-acre gated community offering villa plots and thoughtfully planned villas in Padappai, Chennai. With 460+ premium plots, plot sizes ranging from 600 to 2,400 sq.ft., an 18,000 sq.ft. clubhouse and 100+ lifestyle amenities, Varam is designed for families seeking comfortable living and long-term investment value. Located on the growing Vandalur–Oragadam corridor, the project offers convenient access to schools, colleges, workplaces, entertainment and major transport hubs including Tambaram, Kilambakkam and Chennai Airport.",

    aboutImages: [
      "/images/page-images/varam-about1.jpeg",
      "/images/page-images/varam-about2.jpeg",
    ],

    highlights: [
      {
        label: "Land Area",
        value: "32 Acres",
      },
      {
        label: "Plot Size",
        value: "600 - 2400 Sq.ft",
      },
      {
        label: "Premium Villa Plots",
        value: "460+",
      },
      {
        label: "Clubhouse",
        value: "18,000 Sq.ft",
      },
      {
        label: "Lifestyle Amenities",
        value: "100+",
      },
    ],

    amenities: [
      { title: "Clubhouse", image: "varam-amenity-clubhouse" },
      { title: "Abundant Water Supply", image: "varam-amenity-water" },
      { title: "Avenue Tree Plantation", image: "varam-amenity-trees" },
      { title: "Badminton Court", image: "varam-amenity-badminton" },
      { title: "24/7 CCTV Security", image: "varam-amenity-cctv" },
      { title: "Children's Play Area", image: "varam-amenity-play" },
      { title: "Clock Tower", image: "varam-amenity-clock" },
      { title: "EV Charging Station", image: "varam-amenity-ev" },
      { title: "Fully Compounded Wall", image: "varam-amenity-wall" },
      { title: "Herbal Garden", image: "varam-amenity-herbal" },
      { title: "Mini Football Ground", image: "varam-amenity-football" },
      { title: "Mini Theatre", image: "varam-amenity-theatre" },
      { title: "Miyawaki Forest", image: "varam-amenity-miyawaki" },
      { title: "Open-air Barbecue", image: "varam-amenity-bbq" },
      { title: "Landscaped Parks", image: "varam-amenity-parks" },
      { title: "Pet Friendly Zones", image: "varam-amenity-pets" },
      { title: "Skating Rink", image: "varam-amenity-skating" },
      { title: "Solar Powered Street Lights", image: "varam-amenity-solar" },
      { title: "Stargazing Pod", image: "varam-amenity-stargazing" },
      { title: "Storm Water Drain", image: "varam-amenity-drain" },
    ],

    configurations: [
      {
        name: "2 BHK Villa",
        landExtent: "600 sq.ft",
        builtUpArea: "900 sq.ft",
        features: [
          "Ideal for small families and first-time homebuyers",
          "Smart layout with optimal space planning",
        ],
      },
      {
        name: "2.5 BHK Villa",
        landExtent: "1000 sq.ft",
        builtUpArea: "1200 sq.ft",
        features: [
          "Perfect for families needing extra space for home office or study",
          "Balanced design for comfort and future needs",
        ],
      },
      {
        name: "3 BHK Villa",
        landExtent: "1200 sq.ft",
        builtUpArea: "1500 sq.ft",
        features: [
          "Spacious homes designed for larger families",
          "Enhanced privacy with generous living areas",
        ],
      },
    ],

    proximity: [
      {
        category: "Schools",
        note: "Top schools are located within easy reach of Varam in Padappai.",
        items: [
          { name: "Ravindra Bharathi Global School", distance: "3 Mins" },
          { name: "Alwin International Public School", distance: "10 Mins" },
          { name: "Velammal Vidhyashram", distance: "13 Mins" },
          { name: "The Indian Public School", distance: "14 Mins" },
          { name: "Thriveni Academy Sr. Sec. School", distance: "15 Mins" },
        ],
      },

      {
        category: "Colleges",
        note: "Leading colleges and educational institutions are easily accessible.",
        items: [
          {
            name: "Hindustan Institute of Engineering Technology",
            distance: "3 Mins",
          },
          { name: "RRASE College of Engineering", distance: "4 Mins" },
          { name: "PSP Medical College", distance: "10 Mins" },
          { name: "Crescent University", distance: "10 Mins" },
          { name: "SRM University", distance: "28 Mins" },
        ],
      },

      {
        category: "Worksites",
        note: "Excellent connectivity to major industrial and employment hubs.",
        items: [
          {
            name: "Oragadam SIPCOT Industrial Park",
            distance: "5 Mins",
          },
          { name: "Apollo Tyres", distance: "10 Mins" },
          { name: "Royal Enfield Factory", distance: "10 Mins" },
          { name: "Danfoss Industries", distance: "12 Mins" },
          { name: "Zoho", distance: "12 Mins" },
          { name: "Shriram IT Gateway", distance: "25 Mins" },
          { name: "Mahindra World City", distance: "30 Mins" },
        ],
      },

      {
        category: "Commute",
        note: "Well connected to Tambaram, Kilambakkam and major transport corridors.",
        items: [
          { name: "Padappai Flyover", distance: "8 Mins" },
          { name: "Tambaram Railway Station", distance: "10 Mins" },
          { name: "Kilambakkam Bus Terminus", distance: "12 Mins" },
          { name: "Chennai Airport", distance: "30 Mins" },
          {
            name: "Kilambakkam Electric Railway Station",
            distance: "8 Mins",
            upcoming: true,
          },
          {
            name: "Kilambakkam Metro",
            distance: "12 Mins",
            upcoming: true,
          },
          {
            name: "Parandur Airport",
            distance: "30 Mins",
            upcoming: true,
          },
        ],
      },

      {
        category: "Entertainment",
        note: "Hotels, restaurants and recreational destinations are within convenient reach.",
        items: [
          { name: "Hilarity Inn Hotel", distance: "2 Mins" },
          { name: "Mercure Hotel", distance: "10 Mins" },
          { name: "A2B Restaurant", distance: "10 Mins" },
          { name: "Thennaman Restaurant", distance: "10 Mins" },
          { name: "SH 48 Food Court", distance: "12 Mins" },
          { name: "Harsha Gardens (Banquet Hall)", distance: "13 Mins" },
          { name: "Vandalur Zoo", distance: "25 Mins" },
          { name: "Queensland", distance: "30 Mins" },
        ],
      },
    ],

    layoutImage: "/images/page-images/varam-layout.jpg",

    gallery: [
      "/images/gallery/varam-1.png",
      "/images/gallery/varam-2.png",
      "/images/gallery/varam-3.png",
      "/images/gallery/varam-4.png",
      "/images/gallery/varam-5.png",
      "/images/gallery/varam-6.png",
      "/images/gallery/varam-7.png",
      "/images/gallery/varam-8.png",
      "/images/gallery/varam-9.png",
      "/images/gallery/varam-10.png",
    ],

    faqs: [
      {
        q: "Does buying villa plots in Padappai give good returns?",
        a: "Padappai is a rapidly developing residential corridor with improving infrastructure and connectivity to Oragadam, Tambaram and Kilambakkam. Varam offers DTCP-approved villa plots within a planned gated community, making it suitable for both end-use and long-term investment.",
      },
      {
        q: "What is the price of plots in Padappai?",
        a: "Plot prices in Padappai vary based on location, plot size, approvals and project amenities. Varam offers premium villa plots from 600 to 2,400 sq.ft. Contact our team for the latest plot availability and pricing.",
      },
      {
        q: "Why should I invest in villa plots in Padappai?",
        a: "Padappai offers good connectivity to major employment and industrial hubs including Oragadam and Tambaram. Varam combines this location advantage with gated community infrastructure, a large clubhouse and 100+ lifestyle amenities.",
      },
      {
        q: "Are home loans available for Varam plots?",
        a: "Varam is a DTCP-approved plotted development. Eligible buyers can explore home loan and property financing options with applicable lending institutions. Contact our team for current financing assistance.",
      },
      {
        q: "Is Varam a good investment for the future?",
        a: "Varam is planned across 32 acres with 460+ villa plots, an 18,000 sq.ft. clubhouse and 100+ lifestyle amenities. Its location along the Vandalur–Oragadam corridor provides access to growing residential and employment zones.",
      },
      {
        q: "Are villas in Padappai affordable compared to other areas in Chennai?",
        a: "Padappai provides a more spacious residential environment while maintaining connectivity to important parts of Chennai. Varam offers multiple villa configurations and plot sizes designed for different family requirements.",
      },
      {
        q: "Why should I invest in villas for sale in Chennai?",
        a: "A villa in a planned gated community can offer a combination of privacy, lifestyle amenities, security and long-term residential value. Varam provides 2 BHK, 2.5 BHK and 3 BHK villa configurations within a 32-acre community in Padappai.",
      },
    ],

    address:
      "No.78/2 (138/2), L.B Road, Thiruvanmiyur, Chennai - 600 041, Tamil Nadu",

    phone: "+91 8438 598947",

    email: "Contact@chainandlinks.com",
  },

  amber: {
    slug: "amber",

    DesktopbannerImage: "/images/Banner/amber-banner.jpeg",
    MobilebannerImage: "/images/Banner/amber-mobile-banner.jpeg",

    name: "Amber",

    tagline: "Premium Plots in Ponmar, Chennai",

    location: "Ponmar",

    locationNote:
      "Strategically located in Ponmar near Medavakkam and Mambakkam, with convenient connectivity to OMR, Siruseri SIPCOT IT Park and major South Chennai growth corridors.",

    heroImage: "/images/page-images/amber-card.png",

    actualPrice: "5,800",

    ourPrice: "5,499",

    priceUnit: "/sq.ft.",

    priceNote: "Limited Plots Available",

    heroPeople: null,

    description:
      "Amber is a premium gated plotted development in Ponmar, Chennai, spread across 125 acres with 900+ residential plots. Located near Medavakkam and Mambakkam, Amber offers excellent connectivity to OMR, Siruseri SIPCOT IT Park, Sholinganallur and other major employment hubs in South Chennai. With plot sizes ranging from 600 to 2,400 sq.ft., an impressive 15,000 sq.ft. clubhouse and 80+ lifestyle amenities, Amber is designed for families and investors looking for well-planned plots in Ponmar with strong future growth potential.",

    aboutImages: [
      "/images/page-images/amber-about1.png",
      "/images/page-images/amber-about2.png",
    ],

    highlights: [
      {
        label: "Total Land Area",
        value: "125 Acres",
      },
      {
        label: "Residential Plots",
        value: "900+",
      },
      {
        label: "Plot Size",
        value: "600 - 2400 Sq.ft",
      },
      {
        label: "Clubhouse",
        value: "15,000 Sq.ft",
      },
      {
        label: "Lifestyle Amenities",
        value: "80+",
      },
    ],

    amenities: [
      { title: "Gated Community", image: "amber-amenity-gated" },
      { title: "Clubhouse", image: "amber-amenity-clubhouse" },
      { title: "Swimming Pool", image: "amber-amenity-pool" },
      { title: "Tennis Court", image: "amber-amenity-tennis" },
      { title: "Outdoor Theatre", image: "amber-amenity-theatre" },
      { title: "Landscaped Gardens", image: "amber-amenity-gardens" },
      { title: "Children's Play Area", image: "amber-amenity-play" },
      { title: "Indoor Games Room", image: "amber-amenity-indoor" },
      { title: "Jogging Track", image: "amber-amenity-jogging" },
      { title: "Underground Cabling", image: "amber-amenity-cabling" },
      { title: "24/7 CCTV Security", image: "amber-amenity-cctv" },
      { title: "Storm Water Drain", image: "amber-amenity-drain" },
      { title: "Grand Entrance Signage", image: "amber-amenity-signage" },
    ],

    configurations: [
      {
        name: "Standard Plot",
        landExtent: "600 sq.ft",
        builtUpArea: "—",
        features: [
          "Ideal for first-time land buyers and future home construction",
          "Planned residential plot within a gated community",
        ],
      },
      {
        name: "Premium Plot",
        landExtent: "1200 sq.ft",
        builtUpArea: "—",
        features: [
          "Suitable for spacious villa construction",
          "Corner and park-facing options available",
        ],
      },
      {
        name: "Estate Plot",
        landExtent: "2400 sq.ft",
        builtUpArea: "—",
        features: [
          "Ideal for premium custom villa construction",
          "Generous land area for larger family homes",
        ],
      },
    ],

    proximity: [
      {
        category: "Connectivity",
        note: "Excellent connectivity to Ponmar, Medavakkam, Mambakkam and major South Chennai corridors.",
        items: [
          {
            name: "Medavakkam & Mambakkam Main Road",
            distance: "10 Mins",
          },
          {
            name: "SIPCOT IT Park, Siruseri",
            distance: "15 Mins",
          },
          {
            name: "OMR Road via Thalambur & Navalur",
            distance: "20 Mins",
          },
          {
            name: "Tambaram & GST Road",
            distance: "25 Mins",
          },
        ],
      },

      {
        category: "IT Hubs",
        note: "Close to leading IT and employment destinations along the OMR corridor.",
        items: [
          { name: "Sholinganallur", distance: "18 Mins" },
          { name: "Perumbakkam & Navalur", distance: "16 Mins" },
          { name: "SIPCOT IT Park, Siruseri", distance: "15 Mins" },
        ],
      },

      {
        category: "Education",
        note: "Leading schools and educational institutions are within convenient reach.",
        items: [
          { name: "HLC International School", distance: "12 Mins" },
          { name: "VIT Chennai", distance: "14 Mins" },
          { name: "Velammal Global", distance: "10 Mins" },
        ],
      },

      {
        category: "Healthcare",
        note: "Hospitals and healthcare facilities are easily accessible from Ponmar.",
        items: [
          { name: "Global Hospitals", distance: "17 Mins" },
          { name: "Kamakshi Hospital", distance: "19 Mins" },
        ],
      },

      {
        category: "Commute",
        note: "Convenient access to major bus terminals and transport points in South Chennai.",
        items: [
          { name: "Kilambakkam Bus Terminus", distance: "20 Mins" },
          { name: "Navalur Bus Stop", distance: "15 Mins" },
          { name: "Sholinganallur Bus Stop", distance: "18 Mins" },
        ],
      },
    ],

    layoutImage: "amber-layout",

    gallery: [
      "/images/gallery/amber-1.png",
      "/images/gallery/amber-2.png",
      "/images/gallery/amber-3.png",
      "/images/gallery/amber-4.jpg",
      "/images/gallery/amber-5.png",
      "/images/gallery/amber-6.png",
      "/images/gallery/amber-7.png",
    ],

    faqs: [
      {
        q: "How close is Ponmar to Medavakkam?",
        a: "Ponmar is approximately 10 minutes from Medavakkam, providing convenient access to established residential, commercial and social infrastructure.",
      },

      {
        q: "Are there good schools and hospitals near Ponmar?",
        a: "Yes. Ponmar has access to reputed educational institutions and healthcare facilities in and around Medavakkam, Mambakkam and OMR, making it a convenient location for families.",
      },

      {
        q: "What amenities are available in the Ponmar plots project?",
        a: "The project offers 80+ lifestyle amenities including a clubhouse, swimming pool, tennis court, outdoor theatre, landscaped gardens, children's play area, indoor games room, jogging track and 24/7 CCTV security.",
      },

      {
        q: "Is buying a plot in Ponmar a good investment for the future?",
        a: "Ponmar is a growing residential location in South Chennai with connectivity to Medavakkam, Mambakkam, OMR and Siruseri. Its proximity to major IT and employment hubs makes it an attractive location for long-term residential land investment.",
      },

      {
        q: "Are home loans available for buying plots in Ponmar?",
        a: "Eligible buyers can explore applicable plot financing and home loan options with lending institutions, subject to the lender's eligibility criteria and property documentation.",
      },
    ],

    address:
      "No.78/2 (138/2), L.B Road, Thiruvanmiyur, Chennai - 600 041, Tamil Nadu",

    phone: "+91 8438 598947",

    email: "Contact@chainandlinks.com",
  },

  "crossway-springs": {
    slug: "crossway-springs",
    DesktopbannerImage: "/images/Banner/crossway-springs-banner.jpeg",
    MobilebannerImage: "/images/Banner/crossway-springs-mobile-banner.jpeg",
    name: "Crossway Springs",
    tagline: "More Than a Plot — A Way of Life",
    location: "Ponmar",
    locationNote: "10 mins from Medavakkam",
    heroImage: "/images/page-images/crossway-springs-card.png",
    actualPrice: "5,800",
    ourPrice: "5,499",
    priceUnit: "/sq.ft.",
    priceNote: "Best Plots in Ponmar",
    heroPeople: null,
    description:
      "Crossway Springs brings a considered, community-first layout to Ponmar’s quiet, water-rich landscape on the western edge of OMR. With DTCP-approved plots ranging from compact starter parcels to spacious estate-style extents, a grand community entrance and thoughtful everyday details like Miyawaki-style green pockets and fully fenced boundaries, Crossway Springs carries forward the same amenity standards families have come to expect from Chain & Links’ flagship communities.",
    aboutImages: [
      "/images/gallery/crossway-springs-4.png",
      "/images/gallery/crossway-springs-9.png",
    ],
    highlights: [
      { label: "of Land", value: "7.25 Acres" },
      { label: "sq. ft. Plot Range", value: "513 - 3428" },
      { label: "Total Plots", value: "100" },
      { label: "Approved Banks", value: "10+" },
      { label: "Lifestyle Amenities", value: "9+" },
    ],
    amenities: [
      { title: "DTCP Approved", image: "crossway-amenity-dtcp" },
      {
        title: "Integrated Community with Grand Entrance",
        image: "crossway-amenity-entrance",
      },
      {
        title: "High-Performance Street Lights",
        image: "crossway-amenity-lights",
      },
      { title: "Black Topped Roads", image: "crossway-amenity-roads" },
      { title: "Compound Wall", image: "crossway-amenity-wall" },
      { title: "Complete Fencing", image: "crossway-amenity-fencing" },
      { title: "Lush Green Landscape", image: "crossway-amenity-landscape" },
      { title: "Miyawaki Park", image: "crossway-amenity-miyawaki" },
      { title: "Kids' Play Area", image: "crossway-amenity-play" },
    ],
    configurations: [
      {
        name: "Compact Plot",
        landExtent: "513 sq.ft",
        builtUpArea: "—",
        features: [
          "Ideal for first-time buyers on a tighter budget",
          "DTCP approved layout",
        ],
      },
      {
        name: "Standard Plot",
        landExtent: "1200 - 1800 sq.ft",
        builtUpArea: "—",
        features: [
          "Balanced size for family homes",
          "Wide black-topped road frontage",
        ],
      },
      {
        name: "Estate Plot",
        landExtent: "2400 - 3428 sq.ft",
        builtUpArea: "—",
        features: [
          "Generous extent for custom villa construction",
          "Grand-entrance and park-facing options available",
        ],
      },
    ],
    proximity: [
      {
        category: "Connectivity",
        note: "Fast access to major roads and IT hubs.",
        items: [
          { name: "Medavakkam & Mambakkam Main Road", distance: "10 Mins" },
          { name: "SIPCOT IT Park, Siruseri", distance: "15 Mins" },
          { name: "OMR Road (via Thalambur & Navalur)", distance: "20 Mins" },
          { name: "Tambaram and GST Road", distance: "25 Mins" },
        ],
      },
      {
        category: "IT Hubs",
        note: "Nearby employment corridors.",
        items: [
          { name: "Sholinganallur", distance: "18 Mins" },
          { name: "Perumbakkam & Navalur", distance: "16 Mins" },
        ],
      },
      {
        category: "Education",
        note: "Close to top schools and colleges.",
        items: [
          { name: "HLC International School", distance: "12 Mins" },
          { name: "VIT Chennai", distance: "14 Mins" },
          { name: "Velammal Global", distance: "10 Mins" },
        ],
      },
      {
        category: "Healthcare",
        note: "Near reputed hospitals.",
        items: [
          { name: "Global Hospitals", distance: "17 Mins" },
          { name: "Kamakshi Hospital", distance: "19 Mins" },
        ],
      },
    ],
    layoutImage: "crossway-layout",
    gallery: [
      "/images/gallery/crossway-springs-2.png",
      "/images/gallery/crossway-springs-3.png",
      "/images/gallery/crossway-springs-4.png",
      "/images/gallery/crossway-springs-5.png",
      "/images/gallery/crossway-springs-6.png",
      "/images/gallery/crossway-springs-7.png",
      "/images/gallery/crossway-springs-8.png",
      "/images/gallery/crossway-springs-9.png",
      "/images/gallery/crossway-springs-11.png",
      "/images/gallery/crossway-springs-12.png",
      "/images/gallery/crossway-springs-13.png",
      "/images/gallery/crossway-springs-14.png",
      "/images/gallery/crossway-springs-15.png",
      "/images/gallery/crossway-springs-16.png",
      "/images/gallery/crossway-springs-17.png",
      "/images/gallery/crossway-springs-18.png",
      "/images/gallery/crossway-springs-19.png",
    ],
    faqs: [
      {
        q: "How close is Ponmar to Medavakkam?",
        a: "Ponmar is a well-connected residential location in South Chennai with convenient access to Medavakkam, Mambakkam, OMR and major IT hubs, making it a suitable location for residential investment.",
      },
      {
        q: "Are there good schools and hospitals near Pristine Phase 1?",
        a: "Yes. Pristine Phase 1 is located in Ponmar, which offers convenient access to educational institutions, healthcare facilities and other essential social infrastructure in the surrounding areas.",
      },
      {
        q: "What amenities does Pristine Phase 1 offer?",
        a: "Pristine Phase 1 offers amenities including a grand entrance, black-topped roads, high-performance street lights, compound wall, lush green landscaping, a Miyawaki-style park, complete fencing and a dedicated kids' play area.",
      },
      {
        q: "Is buying a plot in Ponmar a good investment for the future?",
        a: "Ponmar is a growing residential locality with proximity to SIPCOT and major IT hubs in Chennai. Improved infrastructure, connectivity and increasing residential development make Ponmar an attractive location for long-term property investment.",
      },
      {
        q: "Are home loans available for Pristine Phase 1 plots?",
        a: "Yes. Pristine Phase 1 has approvals from multiple leading banks, allowing eligible buyers to explore home loan and property financing options subject to the respective bank's eligibility criteria.",
      },
      {
        q: "What is the plot size available at Pristine Phase 1?",
        a: "Pristine Phase 1 offers residential plots ranging from 513 sq.ft. to 3,428 sq.ft., providing options for different residential requirements.",
      },
      {
        q: "How many plots are available at Pristine Phase 1?",
        a: "Pristine Phase 1 is spread across 7.25 acres and comprises 100 residential plots.",
      },
      {
        q: "Is Pristine Phase 1 DTCP approved?",
        a: "Yes. Pristine Phase 1 offers DTCP-approved residential plots, providing buyers with an approved and planned development.",
      },
    ],
    address:
      "No.78/2 (138/2), L.B Road, Thiruvanmiyur, Chennai - 600 041, Tamil Nadu",
    phone: "+91 8438 598947",
    email: "Contact@chainandlinks.com",
  },
};

export const projectList = Object.values(projects);

export const getProject = (slug) => projects[slug];
