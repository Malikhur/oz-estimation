'use client';

import { useState } from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-custom mb-2">Your Name *</label>
            <input
              id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
              className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-custom/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm md:text-base"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-custom mb-2">Your Email *</label>
            <input
              id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
              className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-custom/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm md:text-base"
              placeholder="john@company.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-custom mb-2">Phone Number *</label>
            <input
              id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
              className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-custom/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm md:text-base"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-custom mb-2">Subject</label>
            <input
              id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange}
              className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-custom/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm md:text-base"
              placeholder="Project Type"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-custom mb-2">Message</label>
          <textarea
            id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
            className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-custom/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none text-sm md:text-base"
            placeholder="Tell us about your project..."
          />
        </div>
        <div>
          <label htmlFor="plans" className="block text-sm font-medium text-slate-custom mb-2">Upload Plans (PDF)</label>
          <input
            id="plans" name="plans" type="file" accept=".pdf,.dwg,.jpg,.png"
            className="w-full text-slate-custom text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-gold hover:file:bg-gold/20 file:cursor-pointer cursor-pointer"
          />
        </div>
        <Button type="submit" variant="primary" className="w-full md:w-auto">
          {submitted ? 'Message Sent!' : <><HiOutlinePaperAirplane className="w-4 h-4" /> Send Message</>}
        </Button>
      </form>
    </AnimatedSection>
  );
}
