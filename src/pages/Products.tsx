import { ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'D-Cut Bags',
    description: 'Strong and convenient bags commonly used in retail and grocery stores.',
    image: 'https://images.unsplash.com/photo-1584472282946-e8f315243b7f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'U-Cut Bags',
    description: 'Durable and flexible bags ideal for supermarkets and general use.',
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Garbage Bags',
    description: 'Eco-friendly waste disposal bags that decompose naturally.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Packaging Covers',
    description: 'Biodegradable covers for industrial and commercial packaging.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Custom Printed Bags',
    description: 'Bags with company logo and branding.',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Products() {
  return (
    <div className="flex flex-col">
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium text-brand-gold">Our Products</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Eco-Friendly Packaging</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our range of 100% biodegradable bags and packaging solutions designed for various industrial and commercial applications.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-stratex-card rounded-3xl border border-stratex-border overflow-hidden group hover:border-white/[0.15] transition-colors">
                <div className="aspect-[4/3] relative overflow-hidden border-b border-stratex-border">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-white transition-colors">
                    Inquire Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing Section */}
      <section className="py-20 border-t border-stratex-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stratex-card rounded-3xl p-8 md:p-12 border border-stratex-border flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="md:w-1/2 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-brand-gold" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Custom Manufacturing</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We offer complete customization based on business needs. Whether you need specific dimensions or branded packaging, we can deliver.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  Different sizes and thickness
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  Multiple color options
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  Custom printing with company logo and branding
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  Bulk order production
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300">
                Request Custom Order <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 w-full relative z-10">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stratex-border">
                 <img 
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000" 
                    alt="Custom Manufacturing" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
