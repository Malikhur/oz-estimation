import AnimatedSection from '@/components/ui/AnimatedSection';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the Oz Estimations privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We may collect personal information that you provide directly, including your name, email address, phone number, company name, and project details when you submit a quote request or contact us. We also automatically collect certain technical data like IP address, browser type, and usage patterns through cookies and similar technologies.',
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide our estimation services, respond to your inquiries, send project quotes and follow-up communications, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.',
    },
    {
      title: 'Information Sharing',
      content: 'We may share your information with trusted service providers who assist in operating our website and delivering our services. These providers are bound by confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety.',
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
    },
    {
      title: 'Cookies and Tracking',
      content: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also request that we limit the processing of your data or object to certain processing activities. To exercise these rights, please contact us using the information provided below.',
    },
    {
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    },
    {
      title: 'Changes to This Policy',
      content: 'We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date. Your continued use of our website after any changes constitutes acceptance of the updated policy.',
    },
    {
      title: 'Contact Us',
      content: 'If you have questions about this privacy policy or our data practices, please contact us at info@ozestimations.com or call +1 (555) 123-4567. You can also write to us at 123 Construction Ave, Suite 200, Dallas, TX 75001.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">
              Last updated: January 2025. This policy describes how Oz Estimations collects, uses, and protects your information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-slate-custom leading-relaxed">{section.content}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
