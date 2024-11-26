// components/PageTransition.js

"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'

const PageTransition = ({ children }) => {
  const router = useRouter();

  // Define page transition animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      key={router.asPath} // Key based on the route path ensures the page remounts on each route change
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
