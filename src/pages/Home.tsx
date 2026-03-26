import { motion } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          alt="Sports action" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2070"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-8xl text-white max-w-5xl leading-tight mb-12"
          >
            Capturing the Intensity of the Game.
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-24 h-px bg-white/40 mb-12"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-sans text-white/60 uppercase tracking-widest-extra text-xs md:text-sm mb-12"
          >
            Sideline & Team Photography Upstate New York
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <a 
              href={import.meta.env.VITE_PIXIESET_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black py-5 px-10 font-sans text-xs uppercase font-bold tracking-widest-mega hover:bg-primary-fixed hover:text-white transition-all duration-500"
            >
              Client Access
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </header>

      {/* Portfolio Summary */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary-fixed mb-4 block">The Work</span>
        <h2 className="font-display text-6xl text-on-surface mb-12">Selected Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="overflow-hidden bg-black aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1000" 
              alt="Action" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="overflow-hidden bg-black aspect-[4/5] md:mt-24">
            <img 
              src="https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?auto=format&fit=crop&q=80&w=1000" 
              alt="Portraits" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <Link 
          to="/portfolio" 
          className="font-sans text-xs uppercase tracking-widest-extra border-b border-black/20 pb-2 hover:border-primary-fixed transition-colors"
        >
          View Full Portfolio
        </Link>
      </section>

      {/* Investment Section */}
      <section className="bg-surface-container-high py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="font-display text-6xl text-on-surface mb-6">Investment</h2>
            <p className="font-sans text-black/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Professional sports photography designed to immortalize every play, every athlete, and every victory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Package 1 */}
            <div className="bg-white p-16 flex flex-col h-full border-r border-black/5">
              <span className="font-sans text-[10px] uppercase tracking-widest mb-4 text-black/40">Individual Session</span>
              <h3 className="font-display text-4xl mb-8">The Starter</h3>
              <p className="text-primary-fixed font-bold text-3xl mb-12">Starting at $250</p>
              <ul className="space-y-6 mb-16 flex-grow">
                {[
                  '45 Minute Focus Shoot',
                  '10 Hand-Edited Action Shots',
                  'Personal Digital Gallery'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-black/60">
                    <Check className="w-4 h-4 text-primary-fixed" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact?interest=Individual%20Athlete%20Focus" className="w-full bg-primary-fixed text-center text-white py-5 px-8 font-sans text-xs uppercase tracking-widest-extra hover:bg-black transition-all duration-500">
                Book Session
              </Link>
            </div>

            {/* Package 2 - Featured */}
            <div className="bg-black text-white p-16 flex flex-col h-full transform md:scale-110 z-10 shadow-2xl shadow-black/40">
              <span className="font-sans text-[10px] uppercase tracking-widest mb-4 text-white/40">Match Coverage</span>
              <h3 className="font-display text-4xl mb-8">The Game Day</h3>
              <p className="text-primary-fixed font-bold text-3xl mb-12">Starting at $450</p>
              <ul className="space-y-6 mb-16 flex-grow">
                {[
                  'Full Game Action Coverage',
                  '40+ High-Res Digital Images',
                  'Expedited 48-72 Hour Delivery',
                  'Personal Online Gallery'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-white/60">
                    <Check className="w-4 h-4 text-primary-fixed" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact?interest=Match%20Coverage" className="w-full bg-primary-fixed text-center text-white py-5 px-8 font-sans text-xs uppercase tracking-widest-extra hover:bg-white hover:text-black transition-all duration-500">
                Select Package
              </Link>
            </div>

            {/* Package 3 */}
            <div className="bg-white p-16 flex flex-col h-full border-l border-black/5">
              <span className="font-sans text-[10px] uppercase tracking-widest mb-4 text-black/40">Team Photography</span>
              <h3 className="font-display text-4xl mb-8">The Roster</h3>
              <p className="text-primary-fixed font-bold text-3xl mb-12">Starting at $750</p>
              <ul className="space-y-6 mb-16 flex-grow">
                {[
                  'Team & Individual Portraits',
                  'Full Roster Digital Delivery',
                  'Organization Print Rights'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-black/60">
                    <Check className="w-4 h-4 text-primary-fixed" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact?interest=Team%20Roster%20Portraits" className="w-full bg-primary-fixed text-center text-white py-5 px-8 font-sans text-xs uppercase tracking-widest-extra hover:bg-black transition-all duration-500">
                Book Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2">
            <motion.div 
              whileInView={{ scale: [1.05, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                alt="William Morris" 
                className="w-full grayscale brightness-90 aspect-[3/4] object-cover" 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-fixed/10 -z-10"></div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary-fixed">The Vision</span>
            <h2 className="font-display text-6xl text-on-surface leading-tight">Capturing the Athletic Soul of Upstate NY.</h2>
            <div className="space-y-8 font-sans text-black/60 leading-relaxed text-xl">
              <p>Based in Potsdam, NY, my work is driven by the raw energy and discipline found on the fields and courts of our local athletic community. I believe that sports are more than just games—they are a testament to hard work, resilience, and the human spirit.</p>
              <p>My approach to photography is architectural and honest. I strip away the distractions to focus on the peak of action and the quiet tension of the sideline. Whether I'm covering a high-stakes championship or a dedicated individual session, my goal is to deliver images that capture the true intensity of the moment.</p>
            </div>
            <div className="pt-12">
              <span className="font-headline italic text-4xl text-black/80">William Morris</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
