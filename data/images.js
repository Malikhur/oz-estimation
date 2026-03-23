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
  'subcontractor-estimation': px(834892),            // blueprints & planning documents
  'general-contractor-estimation': px(2343465),      // construction project overview
  'supplier-manufacturer-estimation': px(1117452),   // building materials & lumber
  'public-contractor-estimating': px(439416),        // government/public building
  'residential-estimation': px(106399),              // residential house
  'commercial-services': px(2768961),                // commercial office building
  'industrial-estimation': px(1267338),              // industrial facility
  // Sitework & Demolition
  'demolition-estimation': px(7218037),              // building demolition site
  'earthwork-excavation-estimation': px(2343468),    // excavation machinery at work
  'site-preparation-estimation': px(259588),         // crane at construction site
  // MEP
  'plumbing-estimation': px(6419128),                // plumber working on pipes
  'mechanical-estimation': px(3616764),              // mechanical HVAC systems
  'electrical-estimation': px(8005397),              // electrician wiring work
  'complete-mep-estimation': px(257700),             // engineering systems & pipes
  // Structural Trades
  'concrete-estimation': px(2898199),                // concrete pouring/forms
  'masonry-estimation': px(157811),                  // brick laying & masonry
  'structural-steel-estimation': px(3637837),        // steel structure frame
  'framing-estimation': px(5506133),                 // wooden frame structure
  'carpentry-estimation': px(1249611),               // carpenter with tools & wood
  // Building Envelope
  'roofing-estimation': px(8092437),                 // roofer working on shingles
  'exterior-finishes-estimation': px(2102587),       // building exterior facade
  'insulation-estimation': px(3760529),              // insulation material install
  'gutter-estimation-services': px(3771099),         // house roof & gutter edge
  // Interior Finishes
  'drywall-estimation': px(5178058),                 // drywall sheets & taping
  'painting-estimation': px(994164),                 // painter rolling wall paint
  'flooring-estimation': px(1457842),                // hardwood floor installation
  'furnishing-estimation': px(1643384),              // beautifully furnished room
  // Specialty & Landscaping
  'specialty-trades-estimation': px(3683041),        // specialty electrical/trade work
  'landscaping-estimation': px(1005058),             // landscaped garden & lawn
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
