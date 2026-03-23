import { ShieldCheck, Leaf, Recycle } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium text-brand-gold">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Forward-Thinking.<br/>Eco-Friendly.</h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Satyaveni Industries is a forward-thinking manufacturing company focused on producing eco-friendly and biodegradable packaging solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-stratex-card rounded-3xl relative overflow-hidden border border-stratex-border p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Manufacturing" 
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Our Goal</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Our goal is to replace harmful plastic products with sustainable alternatives that are safe for the environment and reliable for businesses. With a commitment to innovation and quality, we provide products that meet modern industry needs while contributing to a cleaner and greener planet.
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex gap-4 items-start">
                  <div className="p-3 bg-white/[0.05] border border-white/[0.1] rounded-xl shrink-0">
                    <ShieldCheck className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reliable for Businesses</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">We ensure our biodegradable solutions offer the same strength and reliability as traditional plastics, suitable for bulk supply.</p>
                  </div>
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex gap-4 items-start">
                  <div className="p-3 bg-white/[0.05] border border-white/[0.1] rounded-xl shrink-0">
                    <Leaf className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Safe for the Environment</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">Our products are designed to break down naturally, significantly reducing the environmental impact of packaging waste.</p>
                  </div>
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex gap-4 items-start">
                  <div className="p-3 bg-white/[0.05] border border-white/[0.1] rounded-xl shrink-0">
                    <Recycle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Innovation & Quality</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">We continuously innovate our manufacturing processes to deliver high-quality, custom-printed, and eco-friendly packaging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
