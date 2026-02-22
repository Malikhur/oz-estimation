// Construction & estimation images using Pexels (always reliable)
// Format: https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg

const px = (id, w = 800, h = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const heroImages = {
  home: px(2219024, 1920, 1080),       // construction workers at site
  about: px(1216589, 1920, 1080),       // construction crane sunset
  services: px(159306, 1920, 1080),     // modern building architecture
  contact: px(323780, 1920, 1080),      // modern skyscraper
  faqs: px(585419, 1920, 1080),         // office workspace
};

export const serviceImages = {
  'general-estimation': px(416405),      // laptop with documents/planning
  'sitework-demolition': px(2219024),    // heavy construction machinery
  'mep': px(257736),                     // industrial pipes/mechanical
  'structural-trade': px(2138126),       // steel framework construction
  'building-envelope': px(2098624),      // house roofing/exterior
  'interior-finishes': px(1571460),      // interior room finishing
  'specialty-landscaping': px(1301856),  // landscaped garden
  '3d-rendering': px(323780),           // modern architecture
  'xactimate-estimation': px(3760529),   // house renovation/insurance
};

export const subServiceImages = {
  // General Estimation
  'subcontractor-estimation': px(585419),          // office/planning work
  'general-contractor-estimation': px(2219024),    // construction overview
  'supplier-manufacturer-estimation': px(1216589), // construction materials
  'public-contractor-estimating': px(159306),      // government building
  'residential-estimation': px(106399),            // residential house
  'commercial-services': px(323780),               // commercial building
  'industrial-estimation': px(257736),             // industrial facility
  // Sitework & Demolition
  'demolition-estimation': px(2138126),            // demolition/heavy machinery
  'earthwork-excavation-estimation': px(1216589),  // earthwork/excavation
  'site-preparation-estimation': px(2219024),      // site preparation
  // MEP
  'plumbing-estimation': px(1078884),              // plumbing pipes
  'mechanical-estimation': px(257736),             // mechanical systems
  'electrical-estimation': px(1036936),            // electrical work
  'complete-mep-estimation': px(585419),           // MEP planning
  // Structural Trades
  'concrete-estimation': px(2138126),              // concrete/steel framework
  'masonry-estimation': px(2098624),               // brick/masonry work
  'structural-steel-estimation': px(1216589),      // steel structure
  'framing-estimation': px(2219024),               // wood framing
  'carpentry-estimation': px(1571460),             // carpentry/woodwork
  // Building Envelope
  'roofing-estimation': px(2098624),               // roofing work
  'exterior-finishes-estimation': px(323780),      // building exterior
  'insulation-estimation': px(3760529),            // insulation work
  'gutter-estimation-services': px(2098624),       // gutter/roof edge
  // Interior Finishes
  'drywall-estimation': px(1571460),               // interior walls
  'painting-estimation': px(1301856),              // painting/color
  'flooring-estimation': px(1571460),              // flooring interior
  'furnishing-estimation': px(1571460),            // furnished room
  // Specialty & Landscaping
  'specialty-trades-estimation': px(585419),       // specialty work
  'landscaping-estimation': px(1301856),           // landscaping
  // 3D Rendering
  'still-rendering': px(323780),                   // architectural 3D
  '360-tours': px(159306),                         // panoramic view
  '3d-flythrough': px(323780),                     // 3D architecture
  'video-rendering': px(159306),                   // video/animation
  'product-visualization': px(323780),             // product viz
};

export const aboutImages = {
  team: px(3184291, 800, 600),          // team collaboration
  office: px(585419, 800, 600),         // modern office
  mission: px(2219024, 800, 600),       // construction site
};

export const testimonialImages = {
  0: px(2379004, 200, 200),             // professional man
  1: px(1239291, 200, 200),             // professional woman
  2: px(2182970, 200, 200),             // professional man 2
};
