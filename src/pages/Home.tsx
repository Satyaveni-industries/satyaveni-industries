import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Recycle, ChevronRight, ShoppingBag, Utensils, Building2, Package } from 'lucide-react';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-48 pb-32 flex flex-col items-center justify-center text-center overflow-hidden px-4 min-h-[90vh]">
        {/* Background Accent with Parallax */}
        <motion.div 
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/15 blur-[120px] rounded-full pointer-events-none"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">100% Biodegradable Manufacturer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              Sustainable Packaging for a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-green">
                Greener Future.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Satyaveni Industries manufactures high-quality 100% biodegradable bags and eco-friendly packaging solutions designed to reduce environmental impact and support a sustainable future.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.05] border border-white/[0.1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/[0.1] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Why Choose Us</h2>
              <p className="text-gray-400 text-lg max-w-xl">We provide products that meet modern industry needs while contributing to a cleaner planet.</p>
            </div>
            <Link to="/about" className="hidden md:inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-medium group">
              Learn more about us <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-stratex-card rounded-3xl p-8 border border-stratex-border hover:border-white/[0.15] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[50px] rounded-full group-hover:bg-brand-gold/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Leaf className="h-7 w-7 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">100% Biodegradable</h3>
                <p className="text-gray-400 leading-relaxed">Our products break down naturally without harming the environment, replacing harmful plastics.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-stratex-card rounded-3xl p-8 border border-stratex-border hover:border-white/[0.15] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-[50px] rounded-full group-hover:bg-brand-green/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">High Strength</h3>
                <p className="text-gray-400 leading-relaxed">We ensure strong, durable products with consistent quality for reliable bulk supply.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-stratex-card rounded-3xl p-8 border border-stratex-border hover:border-white/[0.15] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Recycle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Custom Manufacturing</h3>
                <p className="text-gray-400 leading-relaxed">Complete customization including sizes, thickness, colors, and custom printing with your logo.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Applications */}
      <section className="py-24 relative z-10 border-t border-stratex-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Product Applications</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our biodegradable packaging solutions are designed to serve a wide range of industries.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-stratex-card p-8 rounded-3xl border border-stratex-border text-center hover:border-white/[0.15] transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors">
                <ShoppingBag className="h-8 w-8 text-brand-gold transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white">Retail & Supermarkets</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-stratex-card p-8 rounded-3xl border border-stratex-border text-center hover:border-white/[0.15] transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:border-brand-green/30 transition-colors">
                <Utensils className="h-8 w-8 text-brand-green transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white">Restaurants & Food Delivery</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-stratex-card p-8 rounded-3xl border border-stratex-border text-center hover:border-white/[0.15] transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Building2 className="h-8 w-8 text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white">Hospitals & Clinics</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-stratex-card p-8 rounded-3xl border border-stratex-border text-center hover:border-white/[0.15] transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors">
                <Package className="h-8 w-8 text-brand-gold transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white">E-commerce & Logistics</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
