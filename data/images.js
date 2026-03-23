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
  'commercial-services': px(269077),                 // contemporary office building exterior
  'industrial-estimation': px(236705),               // industrial warehouse steel framework
  // Sitework & Demolition
  'demolition-estimation': px(6726785),              // tractor demolishing a building
  'earthwork-excavation-estimation': px(1238864),    // yellow excavators at construction site
  'site-preparation-estimation': px(1579356),        // aerial: excavator road roller bulldozer
  // MEP
  'plumbing-estimation': px(6419128),                // plumber working on pipes
  'mechanical-estimation': px(5463581),              // HVAC technician repairing air conditioning unit
  'electrical-estimation': px(8005397),              // electrician wiring work
  'complete-mep-estimation': px(257700),             // engineering systems & pipes
  // Structural Trades
  'concrete-estimation': px(20591230),                // construction workers pouring concrete on high-rise building
  'masonry-estimation': px(30081237),                // two bricklayers building brick wall on construction site
  'structural-steel-estimation': px(3637837),        // steel structure frame
  'framing-estimation': px(5506133),                 // wooden frame structure
  'carpentry-estimation': px(1249611),               // carpenter with tools & wood
  // Building Envelope
  'roofing-estimation': px(8853474),                 // construction worker on rooftop installation
  'exterior-finishes-estimation': px(2102587),       // building exterior facade
  'insulation-estimation': px(3760529),              // insulation material install
  'gutter-estimation-services': px(35153375),        // residential gutter cleaning service
  // Interior Finishes
  'drywall-estimation': px(5493677),                 // construction worker drilling drywall
  'painting-estimation': px(994164),                 // painter rolling wall paint
  'flooring-estimation': px(4263067),                // man installing laminate flooring
  'furnishing-estimation': px(3797991),              // contemporary furnished living room
  // Specialty & Landscaping
  'specialty-trades-estimation': px(5846247),        // skilled welder in industrial workshop with sparks
  'landscaping-estimation': px(4920288),             // maintenance worker controlling lawn mower
  // 3D Rendering
  'still-rendering': px(5997967),                    // architectural 3D render
  '360-tours': px(8815903),                          // man in suit wearing VR goggles for virtual tours
  '3d-flythrough': px(8961438),                      // modern 3D architecture
  'video-rendering': px(2760243),                    // cinematic architecture
  'product-visualization': px(30415869),             // person viewing 3D model prototype on tablet
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
