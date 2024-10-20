export const NAV_LINKS = [
  { id: "about", title: "About US", url: "/#about" },
{ id: "feature", title: "Core Values", url: "/#feature", submenu: ["Safety", "Integrity", "Innovation", "Collaboration", "Customer Focus"] },
{ id: "services", title: "Services", url: "/#services", submenu: ["Process Engineering Services", "Process Safety Management", "Relief System Gap Analysis", "Mechanical and Piping Engineering Services", "Civil and Structural Engineering Services", "Project Management Consultancy"] },
{ id: "projects", title: "Projects", url: "/#projects", submenu: ["Debutanizer Vacuum Prevention", "Third Process Gas Dryer", "Fractionator Debottleneck Study", "Elevated Flare Upgrade", "Dense Phase Ethane Energy Reduction", "Ethane Header Protection", "Sulfur Recovery Unit Upgrade", "Blowdown and Depressurization Analysis for Butamer Reactors", "Cycle Gas Cooling Water Upgrade"] },
];

export const COMMUNITY_CARDS_INFO = [
  {
    id: 0,
    icon: "/icons/icon-safety.png",
    alt: "people",
    title: "Safety",
    text: "Our top priority is ensuring the safety of everyone involved. We are dedicated to maintaining a secure environment and conducting operations with the highest safety standards.",
  },
  {
    id: 1,
    icon: "/icons/icon-integrity.png",
    alt: "building",
    title: "Integrity",
    text: "We uphold the highest standards of honesty and transparency in every action and decision. Our steadfast commitment to integrity builds deep trust with clients, partners, and communities.",
  },
  {
    id: 2,
    icon: "/icons/icon-innovation.png",
    alt: "hands",
    title: "Innovation",
    text: "We nurture creativity and continuous improvement, driving the development of innovative solutions for the evolving Oil and Gas industry. Our commitment to innovation keeps us ahead in a competitive landscape.",
  },
  {
    id: 3,
    icon: "/icons/icon-collaboration.png",
    alt: "hands",
    title: "Collaboration",
    text: "We believe in teamwork and open communication. By working together across departments and with partners, we deliver superior results that benefit all stakeholders.",
  },
  {
    id: 4,
    icon: "/icons/icon-customer-focus.png",
    alt: "hands",
    title: "Customer Focus",
    text: "Our customers are at the heart of everything we do. We build lasting relationships and strive to exceed expectations by understanding and meeting their needs.",
  },
];

export const PROJECTS_INFO = [
  {
    id: 0,
    name: "Debutanizer Vacuum Prevention",
    text: {
      title: "Debutanizer Vacuum Prevention",
      description: [
        "Strategically optimized the project scope by implementing rupture disk installation, resulting in a remarkable 75% reduction from the initial estimate provided at Gate 1 TEC (Total Estimated Cost).",
        "Collaborated with a diverse cross-functional team to address vacuum conditions in the tower during relief scenarios and to mitigate RC2 SHE risk and potential financial loss of $5M",
      ],
    },
    src: "/projects/project-01-image.png",
  },
  {
    id: 1,
    name: "Third Process Gas Dryer",
    text: {
      title: "Third Process Gas Dryer",
      description: [
        "Pre-FEED development will install a third process gas dryer at the Olefins unit to decouple unit outage from the Dryer catalyst changeouts.",
        "Developed Basis of Design, PFDs, P&IDs, H&MBs, Long Lead Equipment Specifications, and Scope of Work for FEED contractors",
      ],
    },
    src: "/projects/project-02-image.png",
  },
  {
    id: 2,
    name: "Fractionator Debottleneck Study",
    text: {
      title: "Fractionator Debottleneck Study",
      description: [
        "Performed De-ethanizer Debottleneck Study to increase the natural gas throughput from 63K BPD to 70K BPD for the Natural Gas Fractionation plan, Robstown, TX.",
        "Evaluated the distillation column, overhead condenser, reboiler, and refrigeration package utilizing the HYSYS model and analyzed Shell & tube heat exchangers utilizing ASPEN EDR.",
      ],
    },
    src: "/projects/project-03-image.png",
  },
  {
    id: 3,
    name: "Elevated Flare Upgrade",
    text: {
      title: "Elevated Flare Upgrade",
      description: [
        "High-priority compliance project for the online installation of Flare KO Drum and Analyzer Shelter for the timely reporting of combustion zone heating values.",
        "Led HAZOP reviews and worked with cross-functional teams to accelerate FEED, Detail Engineering, and Execution in less than six months.",
      ],
    },
    src: "/projects/project-04-image.png",
  },
  {
    id: 4,
    name: "Dense Phase Ethane Energy Reduction",
    text: {
      title: "Dense Phase Ethane Energy Reduction",
      description: [
        "A conceptual Study was performed to define the scope and estimate Gate 1's $90M for the Site’s GHG Reduction goal for 2030.",
        "FEED and Detail Engineering for the Tie-Ins project to be executed during an upcoming outage.",
      ],
    },
    src: "/projects/project-05-image.png",
  },
  {
    id: 5,
    name: "Ethane Header Protection",
    text: {
      title: "Ethane Header Protection",
      description: [
        "Implemented innovative design solutions for timely and effective responses to HIPPS Skid trips.",
        "Developed a strategic scope leveraging existing taps to install three SHE (Safety, Health, and Environmental) critical transmitters for the SIS trip of the ESV.",
      ],
    },
    src: "/projects/project-06-image.png",
  },
  {
    id: 6,
    name: "Sulfur Recovery Unit Upgrade",
    text: {
      title: "Sulfur Recovery Unit Upgrade",
      description: [
        "Project Leadership: Led Pre-FEED and FEED for a $25M 400 LT/D molten sulfur storage and transfer system, including loading/unloading facilities.",
        "Engineering Deliverables: Developed P&IDs, PFDs, equipment specifications, safety systems, and evaluated vendor quotes, ensuring efficient execution",
        "Hydraulics Expertise: Engineered molten sulfur transfer lines with steam tracing and vent gas routing, optimizing safety and efficiency.",
      ],
    },
    src: "/projects/project-06-image.png",
  },
  {
    id: 7,
    name: "Blowdown and Depressurization Analysis for Butamer Reactors",
    text: {
      title: "Blowdown and Depressurization Analysis for Butamer Reactors",
      description: [
        "Advanced Simulation: Conducted dynamic simulation and depressurization analysis to optimize high-temperature SIS trip responses for the Recycle Gas Compressor.",
        "Pressure Validation: Analyzed and validated settle-out and maximum operating pressures to ensure safe operation.",
        "Emergency Valve Sizing: Engineered and sized high-rate emergency valves and restriction orifices for critical blowdown scenarios.",
      ],
    },
    src: "/projects/project-06-image.png",
  },
  {
    id: 8,
    name: "Cycle Gas Cooling Water Upgrade",
    text: {
      title: "Cycle Gas Cooling Water Upgrade",
      description: [
        "CAVITROL HEX Technology: Led the adoption of CAVITROL HEX trim technology, reducing cavitation and vibration to improve valve performance and reliability.",
        "Capital Efficiency: Delivered a 95% reduction in capital project scope, slashing initial estimates from $4M.",
        "Engineering and Safety Leadership: Developed P&IDs, sized control valves, and led safety reviews during the Detail Engineering and Execution phases.",
      ],
    },
    src: "/projects/project-06-image.png",
  },
];
export const SERVICES_INFO = [
  {
    id: 0,
    name: "Process Engineering Services",
    text: {
      title: "Process Engineering Services",
      description: [
        {
          main: "Conceptual Design, Pre-FEED, and FEED Verification",
          subDescription:
            "Tailored engineering support from early conceptual phases through Front-End Engineering Design (FEED) to ensure robust, cost-effective designs that meet client specifications and industry standards.",
        },
        {
          main: "Economic & Project Justification Analysis",
          subDescription:
            "Expert evaluation of project economics, providing critical insights and justification to ensure financial viability and strategic alignment with business goals.",
        },
        {
          main: "Steady-State & Dynamic Simulation (HYSYS, Pro II, ProMax)",
          subDescription:
            "Advanced modeling solutions to simulate and optimize steady-state and dynamic operations for a wide range of systems, enhancing reliability and performance.",
        },
        {
          main: "Flare, Relief, Blowdown, and Depressurization Studies",
          subDescription:
            "Comprehensive analysis and design of flare, relief, and blowdown networks, ensuring safety and compliance during pressure relief scenarios and depressurization events.",
        },
        {
          main: "Equipment Sizing and Specifications",
          subDescription:
            "Expertise in the design and specification of critical equipment, including pumps, compressors, columns, separators, tanks, and heat exchangers, ensuring optimal performance and reliability.",
        },
        {
          main: "Process Flow Diagrams (PFDs) and Piping & Instrumentation Diagrams (P&IDs)",
          subDescription:
            "Development of detailed process diagrams, utility consumption summaries, and Heat & Material Balances (H&MB), providing clear and actionable insights into system design and operation.",
        },
        {
          main: "Safeguarding and Cause & Effect Analysis",
          subDescription:
            "Development of Cause & Effect Diagrams and safeguarding philosophies, enhancing system safety and operability by addressing potential failure modes and their mitigations.",
        },
        {
          main: "HAZOP, HAZID, SIL & IPF Studies",
          subDescription:
            "Active participation in Hazard and Operability Studies (HAZOP), Hazard Identification (HAZID), Safety Integrity Level (SIL) analysis, and Instrumented Protective Function (IPF) close-out, driving safe design and operational integrity.",
        },
        {
          main: "Surge Analysis and Pipeline Hydraulics",
          subDescription:
            "Conducting surge analysis and hydraulic calculations for pipelines to safeguard against operational disruptions and system failures, ensuring steady, reliable fluid flow.",
        },
        {
          main: "Technical Bid Evaluation and Vendor Documentation Review",
          subDescription:
            "Rigorous evaluation of vendor bids and document reviews, ensuring alignment with project specifications, industry standards, and cost-effective solutions.",
        },
        {
          main: "Hydraulic Calculations and Specifications for Pumps and Piping",
          subDescription:
            "Precision hydraulic calculations for pumps and pipelines, ensuring optimal sizing and performance in accordance with project requirements and operational efficiency.",
        },
      ],
    },
  },
  {
    id: 1,
    name: "Process Safety Management",
    text: {
      title: "Process Safety Management",
      description: [
        {
          main: "Comprehensive Evaluation",
          subDescription:
            "A thorough review of your current PSM processes, procedures, and documentation to identify deviations from regulatory requirements and best practice standards.",
        },
        {
          main: "Risk-Based Element Review",
          subDescription:
            "Focused assessments on critical risk-based PSM elements such as Process Hazard Analysis (PHA), Management of Change (MOC), Operating Procedures, and Mechanical Integrity (MI), ensuring compliance and optimal safety performance.",
        },
        {
          main: "Operational, Design, and Maintenance Focus",
          subDescription:
            "Evaluating the effectiveness of your systems from a holistic perspective, including operational safety protocols, equipment design, and maintenance strategies.",
        },
        {
          main: "Detailed Reporting and Actionable Insights",
          subDescription:
            "Providing a detailed report that outlines gaps, compliance issues, and potential risk areas, along with practical, prioritized recommendations for closing these gaps.",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Relief System Gap Analysis",
    text: {
      title: "Relief System Gap Analysis",
      description: [
        {
          main: "Comprehensive System Evaluation",
          subDescription:
            "A detailed review of your current relief system design, documentation, and operational procedures. This includes verification against applicable codes and standards such as API 520/521, ASME, and OSHA PSM requirements.",
        },
        {
          main: "Relief Device Sizing and Capacity Review",
          subDescription:
            "Assessing the adequacy of relief devices, including valves and rupture disks, to ensure they are appropriately sized and can handle peak overpressure scenarios. This review covers scenarios such as blocked outlets, fire exposure, power failures, and other operational upsets.",
        },
        {
          main: "Overpressure Scenario Identification",
          subDescription:
            "A detailed analysis to identify all possible overpressure scenarios, ensuring that your relief systems can handle the full spectrum of potential operating conditions, both normal and upset.",
        },
        {
          main: "Documentation and Compliance Check",
          subDescription:
            "Verifying that your relief system documentation, including Process Flow Diagrams (PFDs), Piping & Instrumentation Diagrams (P&IDs), and Cause & Effect Diagrams, are up to date, accurate, and in line with current operational realities.",
        },
        {
          main: "Flare System Capacity and Integrity Assessment",
          subDescription:
            "Evaluating the capacity of your flare systems to ensure they can safely and effectively handle relief loads during upset conditions. This includes a review of flare header sizing, knockout drum capacity, and flare tip integrity.",
        },
        {
          main: "Relief Load Calculations",
          subDescription:
            "Performing detailed relief load calculations for each potential scenario, ensuring that all assumptions are accurate and based on current process conditions, while adhering to the latest standards.",
        },
        {
          main: "HAZOP and Risk-Based Approach",
          subDescription:
            "Integrating risk-based methodologies such as HAZOP (Hazard and Operability Study) findings into the relief system analysis to ensure that all critical safety risks are accounted for in system design and operation.",
        },
        {
          main: "Actionable Recommendations and Mitigation Plans",
          subDescription:
            "Providing a detailed gap analysis report, outlining non-compliance areas, potential risks, and prioritized recommendations for system improvements. The report will also include a roadmap for implementing mitigation plans to address identified gaps.",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Mechanical and Piping Engineering Services",
    text: {
      title: "Mechanical and Piping Engineering Services",
      description: [
        {
          main: "Mechanical Equipment Design & Specification",
          subDescription:
            "Expertise in the design and specification of key mechanical equipment, including pumps, compressors, heat exchangers, pressure vessels, reactors, and storage tanks. We ensure equipment is designed for optimal performance, safety, and compliance with industry standards such as ASME, API, and local regulations.",
        },
        {
          main: "Piping Design & Layout",
          subDescription:
            "Development of efficient and reliable piping layouts based on process requirements, space constraints, and flow optimization. Our designs focus on minimizing pressure drops, reducing stress, and optimizing material selection to ensure system integrity and longevity.",
        },
        {
          main: "Piping Stress Analysis & Flexibility Design",
          subDescription:
            "Advanced piping stress analysis to assess the effects of thermal expansion, pressure, and mechanical loads on piping systems. Our analysis ensures that piping is designed for safe operation under all conditions, including startup, shutdown, and emergencies, preventing failures and extending system life.",
        },
        {
          main: "Material Selection & Corrosion Analysis",
          subDescription:
            "Comprehensive material selection services to ensure optimal performance in harsh environments, including high temperatures, high pressures, and corrosive conditions. Our corrosion analysis helps prevent degradation, ensuring the longevity and integrity of your assets.",
        },
        {
          main: "Piping Isometric & 3D Modeling",
          subDescription:
            "We create detailed isometric drawings and 3D models to visualize complex piping systems, ensuring that all components are accounted for and allowing for seamless integration during construction. These models facilitate clash detection, fabrication accuracy, and smooth installation.",
        },
        {
          main: "Equipment Sizing and Procurement Support",
          subDescription:
            "Sizing of mechanical equipment such as pumps, compressors, and heat exchangers to meet process requirements. Our team also provides technical support during the procurement phase, ensuring equipment matches the project’s specifications and performance criteria.",
        },
        {
          main: "Piping Specifications & Standards Compliance",
          subDescription:
            "Developing detailed piping specifications that adhere to industry standards (e.g., ASME B31.3) and project-specific requirements, ensuring compliance with regulatory and safety guidelines. We provide ongoing support to guarantee that piping systems meet operational demands and code compliance.",
        },
        {
          main: "Support Design & Pipe Routing Optimization",
          subDescription:
            "Designing appropriate pipe supports to manage thermal expansion, mechanical loads, and vibration, while optimizing pipe routing for space efficiency and minimal interference with other systems. Our team ensures that the entire piping system is secure and easy to maintain.",
        },
        {
          main: "Heat Exchanger and Pressure Vessel Design",
          subDescription:
            "Design and specification of heat exchangers and pressure vessels tailored to your process requirements, ensuring optimal heat transfer, pressure containment, and compliance with industry standards like ASME Section VIII.",
        },
        {
          main: "Site Survey & As-Built Documentation",
          subDescription:
            "Conducting thorough site surveys and generating accurate as-built documentation to capture existing conditions and integrate new systems seamlessly. Our services include laser scanning and 3D modeling to provide precise data for brownfield projects and retrofits.",
        },
        {
          main: "Construction Support & Field Engineering",
          subDescription:
            "Ongoing support during the construction phase, including field engineering services to address challenges, coordinate with contractors, and ensure the mechanical and piping systems are installed correctly and function as intended. Our hands-on approach ensures project timelines are met while maintaining quality and safety.",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Civil and Structural Engineering Services",
    text: {
      title: "Civil and Structural Engineering Services",
      description: [
        {
          main: "Site Development and Grading Design",
          subDescription:
            "Expert site development services, including grading, drainage, and earthworks to prepare industrial plant sites for construction. We ensure optimal site layout for efficient use of space while managing stormwater and minimizing environmental impact.",
        },
        {
          main: "Foundation Design and Analysis",
          subDescription:
            "Comprehensive foundation design for process equipment, storage tanks, compressors, towers, and heavy machinery. Our team designs cost-effective, safe, and stable foundations that meet site-specific soil conditions and withstand the loads and forces exerted by heavy equipment and structures.",
        },
        {
          main: "Structural Steel Design",
          subDescription:
            "Designing robust structural steel frameworks for process units, pipe racks, platforms, and support systems. We optimize steel structures for strength, durability, and ease of construction while minimizing material costs and lead times.",
        },
        {
          main: "Concrete and Reinforced Concrete Structures",
          subDescription:
            "Expertise in designing concrete structures, including slabs, walls, and foundations. We provide reinforced concrete solutions that ensure long-lasting stability and safety for equipment foundations, buildings, and critical infrastructure.",
        },
        {
          main: "Seismic Design and Analysis",
          subDescription:
            "Ensuring that all civil and structural systems are designed to withstand seismic activity, in compliance with regional seismic codes and standards. Our engineers use advanced modeling techniques to assess the impact of potential earthquakes and implement designs that minimize risk.",
        },
        {
          main: "Pipe Rack and Equipment Support Structures",
          subDescription:
            "Designing pipe racks, cable trays, and support structures that provide safe and efficient routing for critical process lines and utilities. Our designs ensure ease of access for maintenance, optimal space usage, and flexibility for future expansions.",
        },
        {
          main: "Blast-Resistant Building Design",
          subDescription:
            "Expertise in designing blast-resistant buildings and structures to protect personnel and critical equipment from accidental explosions. Our designs meet the stringent requirements of API and ASCE standards, ensuring maximum safety and security for your facility.",
        },
        {
          main: "Drainage and Stormwater Management Systems",
          subDescription:
            "Design and implementation of drainage systems to manage stormwater runoff, prevent flooding, and ensure environmental compliance. Our solutions integrate site grading, retention ponds, and advanced hydraulic analysis to protect your facility from water-related risks.",
        },
        {
          main: "Fireproofing and Structural Integrity Solutions",
          subDescription:
            "Developing fireproofing strategies for structural steel, ensuring critical infrastructure can withstand high-temperature events and meet industry fire protection standards. We design systems that protect your assets while ensuring structural integrity during fire-related incidents.",
        },
        {
          main: "Offsite and Utility Infrastructure Design",
          subDescription:
            "Designing offsite infrastructure, such as roadways, parking facilities, and utility systems, ensuring seamless integration with plant operations. Our civil engineers ensure efficient and durable transportation and utility access for smooth site operations.",
        },
        {
          main: "Structural Integrity Assessments and Retrofits",
          subDescription:
            "Conducting assessments of existing structures to ensure they meet current codes and standards. We also offer retrofit solutions to upgrade aging infrastructure, ensuring compliance with new regulatory requirements and extending the life of critical assets.",
        },
        {
          main: "Construction and Field Engineering Support",
          subDescription:
            "Providing ongoing engineering support during construction, including field supervision, site inspections, and troubleshooting. We work closely with contractors to ensure all designs are accurately implemented and that projects remain on schedule and within budget.",
        },
        {
          main: "3D Modeling and BIM Integration",
          subDescription:
            "Using 3D modeling and Building Information Modeling (BIM) technologies to enhance collaboration, reduce construction risks, and improve project visualization. Our models provide clear, real-time insights into structural designs and help streamline the construction process.",
        },
        {
          main: "Soil Stabilization and Ground Improvement",
          subDescription:
            "Expert solutions for soil stabilization and ground improvement, ensuring safe and secure foundations in challenging or unstable soil conditions. We apply advanced geotechnical engineering techniques to minimize settlement and enhance soil performance.",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Project Management Consultancy",
    text: {
      title: "Project Management Consultancy",
      description: [
        {
          main: "Comprehensive Project Planning & Execution",
          subDescription:
            "From feasibility studies to detailed project execution plans, we develop comprehensive strategies to ensure that your project is well-structured and aligned with business objectives. Our planning process includes resource allocation, schedule development, and cost control strategies that drive project success.",
        },
        {
          main: "FEED & EPC Management",
          subDescription:
            "Our team specializes in overseeing Front-End Engineering Design (FEED) and Engineering, Procurement, and Construction (EPC) phases, ensuring seamless coordination between design and execution. We work closely with engineering and construction teams to ensure that every phase of your project meets technical and financial targets.",
        },
        {
          main: "Risk Management & Mitigation Strategies",
          subDescription:
            "Identifying and mitigating risks is critical to project success. We implement robust risk management frameworks to evaluate potential project risks early and develop strategies to mitigate and manage them, ensuring uninterrupted progress throughout the project lifecycle.",
        },
        {
          main: "Cost Management & Budget Control",
          subDescription:
            "We offer expert cost management services, from initial budgeting through to cost control during execution. Our detailed cost forecasting, variance analysis, and cost-saving strategies ensure that projects remain financially viable without compromising quality or safety.",
        },
        {
          main: "Schedule Development & Monitoring",
          subDescription:
            "Efficient scheduling is key to meeting deadlines. We develop realistic project schedules, incorporating key milestones and critical path activities, and closely monitor progress to ensure all deadlines are met. Our proactive approach helps to avoid delays and keep projects on track.",
        },
        {
          main: "Contractor & Vendor Coordination",
          subDescription:
            "Effective coordination with contractors and vendors is essential for successful project execution. We oversee contractor selection, contract negotiations, and performance monitoring, ensuring alignment with project goals and seamless communication across all stakeholders.",
        },
        {
          main: "Quality Assurance & Control",
          subDescription:
            "Quality is at the core of our project management services. We establish stringent quality control processes, ensuring all project deliverables meet regulatory standards, industry best practices, and project specifications. Our focus on quality minimizes rework and drives successful project outcomes.",
        },
        {
          main: "Health, Safety, and Environmental (HSE) Compliance",
          subDescription:
            "We prioritize safety and environmental protection in every project. Our HSE management services ensure full compliance with local and international safety standards, while fostering a culture of safety across the entire project team. We ensure all activities adhere to stringent environmental regulations and minimize environmental impact.",
        },
        {
          main: "Stakeholder Engagement & Communication Management",
          subDescription:
            "Successful project management requires clear, transparent communication with all stakeholders. We provide regular project updates, host progress meetings, and facilitate collaboration between teams, ensuring that all stakeholders are aligned on project goals and developments.",
        },
        {
          main: "Change Management & Adaptability",
          subDescription:
            "In fast-moving industries, adaptability is essential. We implement change management frameworks to handle any project scope changes, ensuring they are managed without disrupting schedules or budgets. Our proactive approach ensures that any adjustments align with overall project goals.",
        },
        {
          main: "Commissioning, Startup & Handover",
          subDescription:
            "Our team oversees the final phases of commissioning and startup, ensuring that all systems are fully operational and meet performance criteria. We provide detailed handover documentation, including as-built drawings, operation manuals, and training support to ensure a smooth transition to operations.",
        },
        {
          main: "Project Performance Reviews & Lessons Learned",
          subDescription:
            "We conduct post-project reviews to evaluate performance, identify areas for improvement, and capture lessons learned for future projects. This commitment to continuous improvement ensures that each project benefits from the experience gained on prior engagements.",
        },
      ],
    },
  },
];

export const FOOTER_SOCIALS_ICONS = [
  {
    id: 1,
    title: "Info@MeekaEng.com",
    icon: "/socials/icon-email-bottom.png",
    alt: "alt",
    href: "mailto:Info@MeekaEng.com", // Add href for email
  },
  {
    id: 2,
    title: "361-434-0654",
    icon: "/socials/icon-phone-bottom.png",
    alt: "alt",
    href: "tel:+13614340654", // Add href for phone number
  },
  // {
  //   id: 3,
  //   title: "MeekaEng@linkedin.com",
  //   icon: "/socials/icon-linkdin-bottom.png",
  //   alt: "alt",
  //   href: "https://www.linkedin.com/in/meekeng/", // Add href for LinkedIn
  // },
];
