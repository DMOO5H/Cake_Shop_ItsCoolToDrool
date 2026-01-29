import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from './Lightbox';

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Fresh Ingredients',
      description: "We use only the finest, freshest ingredients in our cakes.",
      icon: '🥄',
    },
    {
      id: 2,
      title: 'Custom Orders',
      description: "Get your cake your way – perfectly personalized to your style.",
      icon: '🎂',
    },
    {
      id: 3,
      title: 'Reliable Service',
      description: "Easy online ordering and timely, trustworthy delivery.",
      icon: '✓',
    },
  ];

  // Dynamically load all WhatsApp images from the assets folder.
  const galleryImages = Object.values(
    import.meta.glob('../assets/WhatsApp*.{jpeg,jpg,png}', { eager: true, as: 'url' })
  );

  const [openSrc, setOpenSrc] = useState(null);

  return (
    <section className="bg-gradient-to-br from-pink-100 via-pink-50 to-pink-50 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-10 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300 border-2 border-pink-200/40 shadow-md"
            >
              <div className="text-8xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cake gallery using WhatsApp images from assets */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">Our Cakes</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {galleryImages.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setOpenSrc(src)}
                className="overflow-hidden rounded-lg shadow-lg bg-white/60 p-0 border-0 focus:outline-none"
              >
                <img
                  src={src}
                  alt={`cake-${idx}`}
                  className="object-cover w-full h-36 md:h-44 transform hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
          <Lightbox src={openSrc} alt="cake" onClose={() => setOpenSrc(null)} />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
