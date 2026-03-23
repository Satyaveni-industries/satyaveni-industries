import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', productType: '', quantity: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', company: '', phone: '', email: '', productType: '', quantity: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium text-brand-gold">Inquiries</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Get a Quote.</h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Initiate a conversation about custom manufacturing, bulk orders, or technical specifications.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-stratex-card p-8 rounded-3xl border border-stratex-border hover:border-white/[0.15] transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Headquarters</h3>
                <p className="text-gray-400 leading-relaxed">
                  [Add Address]
                </p>
              </div>
              <div className="bg-stratex-card p-8 rounded-3xl border border-stratex-border hover:border-white/[0.15] transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
                  <Phone className="h-6 w-6 text-brand-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-gray-400 leading-relaxed">
                  [Add Number]<br/>
                  [Add Email]
                </p>
              </div>
              
              {/* Google Maps Placeholder */}
              <div className="bg-stratex-card rounded-3xl border border-stratex-border h-64 w-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-gray-500 font-medium flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Google Maps Placeholder
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-stratex-card p-8 md:p-12 rounded-3xl border border-stratex-border">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Company Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Product Type</label>
                    <select name="productType" required value={formData.productType} onChange={handleChange}
                      className="w-full bg-[#111] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all appearance-none">
                      <option value="">Select an option</option>
                      <option value="D-Cut Bags">D-Cut Bags</option>
                      <option value="U-Cut Bags">U-Cut Bags</option>
                      <option value="Garbage Bags">Garbage Bags</option>
                      <option value="Packaging Covers">Packaging Covers</option>
                      <option value="Custom Printed Bags">Custom Printed Bags</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Quantity</label>
                    <input type="text" name="quantity" required value={formData.quantity} onChange={handleChange} placeholder="e.g. 10,000 pcs"
                      className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea name="message" required rows={4} value={formData.message} onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-white text-black px-8 py-4 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 mt-4">
                  {isSubmitting ? 'Sending...' : 'Get a Quote'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-brand-green text-sm font-medium mt-4 text-center bg-brand-green/10 py-3 rounded-xl border border-brand-green/20">
                    Inquiry received. Our team will contact you shortly.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
