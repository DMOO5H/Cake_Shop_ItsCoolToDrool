import { IconCake, IconToolsKitchen2, IconCheck  } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from './Lightbox';

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Fresh Ingredients',
      description: "We use only the finest, freshest ingredients in our cakes.",
      icon: <IconToolsKitchen2 stroke={2} size={32}/>,
    },
    {
      id: 2,
      title: 'Custom Orders',
      description: "Get your cake your way – perfectly personalized to your style.",
      icon: <IconCake stroke={2} size={32} />,
    },
    {
      id: 3,
      title: 'Reliable Service',
      description: "Easy online ordering and timely, trustworthy delivery.",
      icon: <IconCheck stroke={2} size={32} />,
    },
  ];

  // Dynamically load all WhatsApp images from the assets folder.
  const galleryImages = Object.values(
    import.meta.glob('../assets/WhatsApp*.{jpeg,jpg,png}', { eager: true, as: 'url' })
  );

  const [openSrc, setOpenSrc] = useState(null);

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-pink-50 py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto my-auto">
        <div className="flex flex-row items-center justify-center gap-20 h-100">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center h-40 w-120 text-center bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300 border-2 border-pink-200/40 shadow-md"
            >
              <div className="text-8xl mb-6">{feature.icon}</div>
              <h3 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cake gallery using WhatsApp images from assets */}
        <div className="flex flex-col items-center justify-center m-44 gap-12">
          <h1 className="flex flex-row font-bold text-gray-800 text-center">Our Cakes</h1>
          <div className="flex flex-row items center justify-center gap-6">
            {galleryImages.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setOpenSrc(src)}
                className="overflow-hidden rounded-lg shadow-lg bg-white/60 p-0 border-0 focus:outline-none"
              >
                <img
                  src={src}
                  alt={`cake-${idx}`}
                  className="object-cover w-full h-44 md:h-52 transform hover:scale-105 transition-transform duration-300"
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
