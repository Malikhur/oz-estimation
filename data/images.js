// Construction & estimation images using Pexels (always reliable)
// Format: https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg
// RULE: Every image ID is used ONLY ONCE across the entire site.

const px = (id, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop&dpr=2`;

export const heroImages = {
  home: px(2219024, 1920, 1080),       // construction workers at site
  about: px(1216589, 1920, 1080),       // construction crane sunset
  services: px(1109541, 1920, 1080),    // modern building architecture
  contact: px(323780, 1920, 1080),      // modern skyscraper
  faqs: px(585419, 1920, 1080),         // office workspace
};

export const serviceImages = {
  'general-estimation': px(416405, 1200, 800),      // laptop with documents/planning
  'sitework-demolition': px(1463917, 1200, 800),    // heavy construction machinery
  'mep': px(257736, 1200, 800),                     // industrial pipes/mechanical
  'structural-trade': px(2138126, 1200, 800),       // steel framework construction
  'building-envelope': px(2098624, 1200, 800),      // house roofing/exterior
  'interior-finishes': px(1571460, 1200, 800),      // interior room finishing
  'specialty-landscaping': px(1301856, 1200, 800),  // landscaped garden
  '3d-rendering': px(3935333, 1200, 800),           // modern 3d architecture
};

export const subServiceImages = {
  // General Estimation
  'subcontractor-estimation': px(271667),            // subcontractor at work
  'general-contractor-estimation': px(2343465),      // construction project overview
  'supplier-manufacturer-estimation': px(259962),    // building materials supply
  'public-contractor-estimating': px(439416),        // government/public building
  'residential-estimation': px(106399),              // residential house
  'commercial-services': px(2768961),                // commercial office building
  'industrial-estimation': px(4792493),              // industrial warehouse
  // Sitework & Demolition
  'demolition-estimation': px(4513940),              // demolition site
  'earthwork-excavation-estimation': px(2343468),    // earthwork/excavation machinery
  'site-preparation-estimation': px(259588),         // crane at construction site
  // MEP
  'plumbing-estimation': px(1078884),                // plumbing pipes
  'mechanical-estimation': px(3616764),              // mechanical/industrial pipes
  'electrical-estimation': px(1036936),              // electrical work
  'complete-mep-estimation': px(209190),             // engineering blueprints
  // Structural Trades
  'concrete-estimation': px(2898199),                // concrete pouring
  'masonry-estimation': px(2581922),                 // brick/masonry work
  'structural-steel-estimation': px(3637837),        // steel skyscraper frame
  'framing-estimation': px(5506133),                 // wooden frame structure
  'carpentry-estimation': px(5698027),               // carpentry tools & woodwork
  // Building Envelope
  'roofing-estimation': px(5490778),                 // roofing work
  'exterior-finishes-estimation': px(2102587),       // building exterior facade
  'insulation-estimation': px(3760529),              // insulation work
  'gutter-estimation-services': px(3771099),         // house roof & gutter
  // Interior Finishes
  'drywall-estimation': px(534220),                  // interior wall finishing
  'painting-estimation': px(3797517),                // painting & roller
  'flooring-estimation': px(2251247),                // interior flooring
  'furnishing-estimation': px(2582818),              // furnished room interior
  // Specialty & Landscaping
  'specialty-trades-estimation': px(208736),         // specialty tools
  'landscaping-estimation': px(1544420),             // landscape garden
  // 3D Rendering
  'still-rendering': px(5997967),                    // architectural 3D render
  '360-tours': px(3184339),                          // panoramic view
  '3d-flythrough': px(8961438),                      // modern 3D architecture
  'video-rendering': px(2760243),                    // cinematic architecture
  'product-visualization': px(2046432),              // product visualization
};

export const aboutImages = {
  team: px(3184291, 1200, 800),          // team collaboration
  office: px(3773023, 1200, 800),        // architect at work
  mission: px(2219028, 1200, 800),       // construction site mission
};

export const testimonialImages = {
  0: px(2379004, 200, 200),             // professional man
  1: px(1239291, 200, 200),             // professional woman
  2: px(2182970, 200, 200),             // professional man 2
};
