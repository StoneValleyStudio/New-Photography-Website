import { motion } from 'motion/react';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [interest, setInterest] = useState('Project Interest');

  useEffect(() => {
    const interestParam = searchParams.get('interest');
    if (interestParam) {
      setInterest(interestParam);
    }
  }, [searchParams]);

  return (
    <section className="py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
        <div>
          <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary-fixed mb-4 block">Get in Touch</span>
          <h2 className="font-display text-7xl mb-12">Elevate Your Team's Image.</h2>
          <p className="font-sans text-black/60 mb-16 text-xl max-w-md leading-relaxed">
            Currently booking for the upcoming varsity and club seasons across Potsdam, NY and Upstate New York.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <Mail className="w-5 h-5 text-primary-fixed group-hover:text-white" />
              </div>
              <span className="font-sans text-sm tracking-widest uppercase text-black/60 group-hover:text-black transition-colors">hello@williammorris.photo</span>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <MapPin className="w-5 h-5 text-primary-fixed group-hover:text-white" />
              </div>
              <span className="font-sans text-sm tracking-widest uppercase text-black/60 group-hover:text-black transition-colors">Potsdam, New York</span>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 bg-surface-container-high p-12 md:p-20 border border-black/5"
        >
          <div className="relative">
            <input 
              className="peer w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary-fixed transition-colors text-lg" 
              id="name" 
              placeholder=" " 
              type="text"
            />
            <label className="absolute left-0 top-4 text-black/40 text-xs uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-primary-fixed peer-[:not(:placeholder-shown)]:-top-6" htmlFor="name">Full Name</label>
          </div>
          <div className="relative">
            <input 
              className="peer w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary-fixed transition-colors text-lg" 
              id="email" 
              placeholder=" " 
              type="email"
            />
            <label className="absolute left-0 top-4 text-black/40 text-xs uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-primary-fixed peer-[:not(:placeholder-shown)]:-top-6" htmlFor="email">Email Address</label>
          </div>
          <div className="relative">
            <select 
              className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary-fixed text-black/40 text-lg appearance-none cursor-pointer" 
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option className="bg-white">Project Interest</option>
              <option className="bg-white">Sideline Action</option>
              <option className="bg-white">Match Coverage</option>
              <option className="bg-white">Team Roster Portraits</option>
              <option className="bg-white">Individual Athlete Focus</option>
              <option className="bg-white">Season Coverage</option>
              <option className="bg-white">Championship Event</option>
            </select>
            <ChevronDown className="absolute right-0 top-6 w-4 h-4 text-black/20 pointer-events-none" />
          </div>
          <div className="relative">
            <textarea 
              className="peer w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary-fixed transition-colors resize-none text-lg" 
              id="message" 
              placeholder=" " 
              rows={4}
            ></textarea>
            <label className="absolute left-0 top-4 text-black/40 text-xs uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-primary-fixed peer-[:not(:placeholder-shown)]:-top-6" htmlFor="message">Tell me about your season goals</label>
          </div>
          <button className="w-full bg-black text-white py-6 font-sans text-xs uppercase font-bold tracking-widest-mega hover:bg-primary-fixed transition-all duration-500">
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
