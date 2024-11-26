import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import './globals.css';
import Footer from "./includes/Footer";
import Header from "./includes/Header";
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { AnimatePresence } from 'framer-motion'; 

// This will be SSR-compatible
export default function RootLayout({ children, hfVisibility }) {
  const [routeKey, setRouteKey] = useState(0);

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  useEffect(() => {
    // This logic will only run client-side
    setRouteKey(prev => prev + 1); // Trigger animation on route change
  }, []);

  return (
    <html lang="en">
      <body className="!overflow-y-auto !p-0 bg-dazzle-dark">
        <AnimatePresence mode="wait">
          <ThemeProvider>
            <AuthProvider>
              <Header headerFoorterReq={hfVisibility} />
              <motion.div
                key={routeKey}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                {children}
              </motion.div>
              <Footer headerFoorterReq={hfVisibility} />
            </AuthProvider>
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}

// Get server-side props to handle route visibility logic
export async function getServerSideProps({ req }) {
  // Determine the current route/pathname
  const pathname = req.url || '';
  const headerHideFor = ['/login']; // Define routes where header is hidden

  // Determine if the header should be visible for this route
  const hfVisibility = !headerHideFor.includes(pathname);

  // Return the necessary props to the component
  return {
    props: { hfVisibility }, // Pass to the component as a prop
  };
}
