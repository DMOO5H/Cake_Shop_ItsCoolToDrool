import { IconBrandX, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { motion } from 'framer-motion';

function FooterSection() {
  return (
    <footer className="bg-teal-500 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left - Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="text-2xl md:text-3xl font-bold tracking-wider">
              <span className="text-rose-500">IT'S</span>
              <span className="text-white">COOL</span>
              <span className="text-rose-500">TO</span>
              <span className="text-white">DROOL</span>
            </span>
            <p className="text-white text-sm md:text-base">
              © 2024 It's Cool to Drool. All rights reserved.
            </p>
          </motion.div>

          {/* Center - Follow Us */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <span className="text-white font-semibold text-lg">Follow Us</span>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#facebook"
                className="bg-white text-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-all duration-300 shadow-md"
              >
                <IconBrandFacebook />
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                className="bg-white text-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-all duration-300 shadow-md"
              >
                <IconBrandInstagram />
              </a>

              {/* X */}
              <a
                href="#x"
                className="bg-white text-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-all duration-300 shadow-md"
              >
                <IconBrandX />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
