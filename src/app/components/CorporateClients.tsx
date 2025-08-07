'use client';

import { motion } from 'framer-motion';

const slideUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const CorporateClients = () => {
  return (
    <section className="bg-[#f6f8fc] py-12 px-4 md:px-20">
      <div className="mx-auto">
        {/* Title */}
        <motion.div
          className="flex items-center justify-start gap-4 mb-10"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-sm tracking-widest text-gray-500 uppercase">Corporate Clients</h3>
          <div className="flex-grow border-t border-gray-300"></div>
        </motion.div>

        {/* Logos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-400 text-lg tracking-widest font-medium"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>LOGO</div>
          <div>LOGO</div>
          <div>LOGO</div>
          <div>LOGO</div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateClients;
