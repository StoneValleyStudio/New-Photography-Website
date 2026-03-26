import { motion } from 'motion/react';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Sideline Intensity",
      category: "Action & Emotion",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1000",
      span: "md:col-span-7"
    },
    {
      title: "The Roster",
      category: "Team & Individual Portraits",
      image: "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?auto=format&fit=crop&q=80&w=1000",
      span: "md:col-span-5 md:pt-48"
    },
    {
      title: "Game Day Atmosphere",
      category: "The Environment & The Crowd",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200",
      span: "md:col-span-8 md:col-start-3 md:-mt-24"
    },
    {
      title: "The Warmup",
      category: "Preparation & Focus",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1000",
      span: "md:col-span-5"
    },
    {
      title: "Victory Moment",
      category: "Celebration",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1000",
      span: "md:col-span-7 md:pt-24"
    }
  ];

  return (
    <section className="py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24">
        <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary-fixed mb-4 block">The Full Collection</span>
        <h2 className="font-display text-7xl text-on-surface">Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
        {portfolioItems.map((item, index) => (
          <motion.div 
            key={index}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            className={`${item.span} group cursor-pointer`}
          >
            <div className="overflow-hidden mb-8 bg-black">
              <img 
                alt={item.title} 
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                referrerPolicy="no-referrer"
                src={item.image}
              />
            </div>
            <h3 className="font-display text-4xl mb-3">{item.title}</h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-black/40">{item.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
