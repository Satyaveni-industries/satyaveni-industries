import { Leaf, Recycle, Globe } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="flex flex-col">
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-green/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium text-brand-green">Sustainability</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Committed to a<br/>Greener Future.</h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Plastic pollution is one of the biggest environmental challenges today. Traditional plastics take hundreds of years to decompose. We are committed to creating a greener future.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            
            <div className="bg-stratex-card p-10 rounded-3xl border border-stratex-border relative overflow-hidden group hover:border-white/[0.15] transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-[50px] group-hover:bg-brand-green/20 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 relative z-10">
                <Leaf className="h-7 w-7 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-tight">Reduce Environmental Impact</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                By choosing biodegradable packaging, businesses can significantly reduce their environmental footprint and combat plastic pollution.
              </p>
            </div>

            <div className="bg-stratex-card p-10 rounded-3xl border border-stratex-border relative overflow-hidden group hover:border-white/[0.15] transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[50px] group-hover:bg-brand-gold/20 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 relative z-10">
                <Globe className="h-7 w-7 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-tight">Support Sustainability</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Our products are made using high-quality biodegradable materials that break down naturally without harming the environment.
              </p>
            </div>

            <div className="bg-stratex-card p-10 rounded-3xl border border-stratex-border relative overflow-hidden group hover:border-white/[0.15] transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 relative z-10">
                <Recycle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-tight">Follow Eco-Friendly Practices</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                We ensure eco-friendly production methods, providing sustainable alternatives that align with modern corporate responsibility.
              </p>
            </div>

          </div>

          <div className="bg-stratex-card border border-stratex-border rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000')] opacity-10 mix-blend-luminosity object-cover w-full h-full"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-stratex-card via-transparent to-transparent"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Materials & Technology</h2>
               <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                 Our products are made using high-quality biodegradable materials that break down naturally without harming the environment. We ensure strong and durable products, consistent quality, and eco-friendly production methods.
               </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
