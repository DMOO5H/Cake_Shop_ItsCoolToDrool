import { IconBrandX, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { motion } from 'framer-motion';

function FooterSection() {
  return (
    <footer className="bg-teal-500">
      <div className="">
        <div className="flex flex-row justify-between items-center h-18 px-10">
          {/* Left - Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-white text-sm md:text-base">
              © 2026 It's Cool to Drool. All rights reserved.
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
