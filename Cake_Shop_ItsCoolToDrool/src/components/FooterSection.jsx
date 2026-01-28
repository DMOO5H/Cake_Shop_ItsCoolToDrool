import { motion } from 'framer-motion';

function FooterSection() {
  return (
    <footer className="bg-teal-400 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="text-2xl font-bold tracking-wider">
              <span className="text-rose-600">IT'S</span>
              <span className="text-white">COOL</span>
              <span className="text-rose-600">TO</span>
              <span className="text-white">DROOL</span>
            </span>
            <p className="text-white text-sm">
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
            <span className="text-white font-semibold">Follow Us</span>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#facebook"
                className="bg-white text-rose-400 w-8 h-8 rounded-full flex items-center justify-center hover:bg-rose-100 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                className="bg-white text-rose-400 w-8 h-8 rounded-full flex items-center justify-center hover:bg-rose-100 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 7.313c.055.588.055 1.176.055 1.764 0 5.405-4.11 11.638-11.638 11.638-2.315 0-4.466-.677-6.276-1.853.325.038.65.056.986.056 1.917 0 3.685-.648 5.086-1.741-1.8-.033-3.307-1.219-3.827-2.85.258.038.515.065.792.065.373 0 .738-.05 1.094-.147-1.879-.378-3.294-2.038-3.294-4.034v-.05c.553.306 1.188.49 1.862.515-.1.075-.206.145-.303.225-1.1.878-1.825 2.377-1.825 4.078 0 .896.24 1.736.658 2.457 2.025-2.492 5.053-4.133 8.467-4.308-.068-.295-.103-.603-.103-.915 0-2.261 1.83-4.087 4.087-4.087 1.175 0 2.235.495 2.982 1.29.93-.182 1.806-.52 2.595-.988-.305.954-.953 1.756-1.794 2.262.827-.1 1.616-.318 2.351-.646-.548.818-1.24 1.535-2.034 2.11z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#twitter"
                className="bg-white text-rose-400 w-8 h-8 rounded-full flex items-center justify-center hover:bg-rose-100 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
