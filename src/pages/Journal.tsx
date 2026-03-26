import { motion } from 'motion/react';

export default function Journal() {
  const posts = [
    {
      date: "Oct 12, 2024",
      title: "The Quiet Before the Whistle",
      excerpt: "Exploring the mental preparation of athletes in the final minutes before a championship game.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "Sep 28, 2024",
      title: "Potsdam's Local Legends",
      excerpt: "A photo essay on the community impact of local high school sports programs.",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "Aug 15, 2024",
      title: "Technical: Shooting in Low Light",
      excerpt: "My approach to capturing crisp action shots during night games under stadium lights.",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24">
        <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary-fixed mb-4 block">Stories & Insights</span>
        <h2 className="font-display text-7xl text-on-surface mb-8">The Journal</h2>
        <p className="font-sans text-black/60 max-w-2xl text-xl leading-relaxed">
          Reflections on the game, technical notes from the sideline, and the stories behind the shots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {posts.map((post, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden bg-black mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-black/40 block mb-4">{post.date}</span>
            <h3 className="font-display text-3xl mb-4 group-hover:italic transition-all">{post.title}</h3>
            <p className="font-sans text-black/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>
            <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary-fixed border-b border-primary-fixed/20 pb-1 group-hover:border-primary-fixed transition-colors">
              Read Story
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
