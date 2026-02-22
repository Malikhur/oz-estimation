export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'General Estimation',
        href: '/services/general-estimation',
        children: [
          { label: 'Subcontractor Estimation', href: '/services/general-estimation/subcontractor-estimation' },
          { label: 'General Contractor Estimation', href: '/services/general-estimation/general-contractor-estimation' },
          { label: 'Supplier & Manufacturer', href: '/services/general-estimation/supplier-manufacturer-estimation' },
          { label: 'Public Contractor', href: '/services/general-estimation/public-contractor-estimating' },
          { label: 'Residential Estimation', href: '/services/general-estimation/residential-estimation' },
          { label: 'Commercial Estimation', href: '/services/general-estimation/commercial-services' },
          { label: 'Industrial Estimation', href: '/services/general-estimation/industrial-estimation' },
        ],
      },
      {
        label: 'Sitework & Demolition',
        href: '/services/sitework-demolition',
        children: [
          { label: 'Demolition Estimation', href: '/services/sitework-demolition/demolition-estimation' },
          { label: 'Earthwork & Excavation', href: '/services/sitework-demolition/earthwork-excavation-estimation' },
          { label: 'Site Preparation', href: '/services/sitework-demolition/site-preparation-estimation' },
        ],
      },
      {
        label: 'MEP Systems',
        href: '/services/mep',
        children: [
          { label: 'Plumbing Estimation', href: '/services/mep/plumbing-estimation' },
          { label: 'Mechanical Estimation', href: '/services/mep/mechanical-estimation' },
          { label: 'Electrical Estimation', href: '/services/mep/electrical-estimation' },
          { label: 'Complete MEP', href: '/services/mep/complete-mep-estimation' },
        ],
      },
      {
        label: 'Structural Trades',
        href: '/services/structural-trade',
        children: [
          { label: 'Concrete Estimation', href: '/services/structural-trade/concrete-estimation' },
          { label: 'Masonry Estimation', href: '/services/structural-trade/masonry-estimation' },
          { label: 'Structural Steel', href: '/services/structural-trade/structural-steel-estimation' },
          { label: 'Framing Estimation', href: '/services/structural-trade/framing-estimation' },
          { label: 'Carpentry Estimation', href: '/services/structural-trade/carpentry-estimation' },
        ],
      },
      {
        label: 'Building Envelope',
        href: '/services/building-envelope',
        children: [
          { label: 'Roofing Estimation', href: '/services/building-envelope/roofing-estimation' },
          { label: 'Exterior Finishes', href: '/services/building-envelope/exterior-finishes-estimation' },
          { label: 'Insulation Estimation', href: '/services/building-envelope/insulation-estimation' },
          { label: 'Gutter Estimation', href: '/services/building-envelope/gutter-estimation-services' },
        ],
      },
      {
        label: 'Interior Finishes',
        href: '/services/interior-finishes',
        children: [
          { label: 'Drywall Estimation', href: '/services/interior-finishes/drywall-estimation' },
          { label: 'Painting Estimation', href: '/services/interior-finishes/painting-estimation' },
          { label: 'Flooring Estimation', href: '/services/interior-finishes/flooring-estimation' },
          { label: 'Furnishing Estimation', href: '/services/interior-finishes/furnishing-estimation' },
        ],
      },
      {
        label: 'Specialty & Landscaping',
        href: '/services/specialty-landscaping',
        children: [
          { label: 'Specialty Trades', href: '/services/specialty-landscaping/specialty-trades-estimation' },
          { label: 'Landscaping Estimation', href: '/services/specialty-landscaping/landscaping-estimation' },
        ],
      },
      {
        label: '3D Rendering',
        href: '/services/3d-rendering',
        children: [
          { label: 'Still Renderings', href: '/services/3d-rendering/still-rendering' },
          { label: '360 Tours', href: '/services/3d-rendering/360-tours' },
          { label: '3D Flythrough', href: '/services/3d-rendering/3d-flythrough' },
          { label: 'Video Rendering', href: '/services/3d-rendering/video-rendering' },
          { label: 'Product Visualization', href: '/services/3d-rendering/product-visualization' },
        ],
      },
      {
        label: 'Xactimate Estimation',
        href: '/services/xactimate-estimation',
      },
    ],
  },
  { label: 'Get Estimation', href: '/get-estimation' },
  { label: 'FAQs', href: '/faqs' },
];
