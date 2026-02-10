import { motion } from 'framer-motion';
function HeroSection() {
  return (
    <section className="max-h-full max-w-full bg-linear-to-br from-pink-100 via-pink-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-12 right-20 w-56 h-56 bg-pink-200 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-20"></div>

      <div className="flex flex-row max-w-screen max-h-screen">
        <div className="">
          {/* Left Image - Cake Display (hero image from assets) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="relative max-h-screen max-w-screen">
              <img
                src={new URL('/Users/apple/Documents/Codes/Cake_Shop_ItsCoolToDrool/Cake_Shop_ItsCoolToDrool/src/assets/Background.jpeg', import.meta.url).href}
                alt="Delicious cakes"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 relative z-10"
          >
            <div>
              <p className="text-amber-800 text-xl md:text-2xl font-medium italic mb-6">
                Sweeten Your Day with Our
              </p>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-rose-700 leading-tight tracking-wider">
                IRRESISTIBLE
                <br />
                CAKES
              </h1>
            </div>

            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              Discover the most delicious, custom-made cakes for every occasion!
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-rose-600 transition-all duration-300 w-fit shadow-xl border-2 border-rose-300"
            >
              View Cakes
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
