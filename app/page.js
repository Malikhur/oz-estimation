import HomeContent from '@/components/HomeContent';

export const metadata = {
  title: 'Oz Estimations | Professional Construction Cost Estimation Services',
  description: 'Get accurate, detailed construction cost estimations for residential, commercial & industrial projects. Trusted by 1000+ contractors with 98% accuracy. Free quotes in 24-48 hours.',
  keywords: [
    'construction cost estimation', 'cost estimator', 'quantity takeoff',
    'material takeoff', 'construction bidding', 'contractor estimation',
    'residential estimation', 'commercial estimation', 'bid estimation services',
  ],
  alternates: {
    canonical: 'https://ozestimations.com',
  },
  openGraph: {
    title: 'Oz Estimations | Professional Construction Cost Estimation Services',
    description: 'Accurate construction cost estimation for all project types. 5,000+ projects, 98% accuracy. Get your free quote today.',
    url: 'https://ozestimations.com',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
