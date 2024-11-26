"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import '../app/globals.css';
import Footer from "@/app/includes/Footer";
import Header from "@/app/includes/Header";
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { AnimatePresence } from 'framer-motion'; 
import { CornerDownLeft } from 'lucide-react';

// This component will be rendered both on the server and the client side.
export default function RootLayout({ children }) {
  const router = usePathname();
  const [hfVisiblity, setHfVisiblity] = useState(true);
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

  // Use effect only for client-side behavior
  useEffect(() => {
    const headerHideFor = ['/login', "/register"];
    if (headerHideFor.includes(router)) {
      setHfVisiblity(false);
    } else {
      setHfVisiblity(true);
    }

    const handleRouteChange = () => {
      setRouteKey(prev => prev + 1); // Trigger animation on route change
    };
    handleRouteChange(); // Trigger animation once on initial render
  }, [router]);

  return (
    <html lang="en">
      <body className="!overflow-y-auto !p-0 bg-dazzle-dark">
        <AnimatePresence mode="wait">
          <ThemeProvider>
            <AuthProvider>
              <Header headerFoorterReq={hfVisiblity} />
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
              <Footer headerFoorterReq={hfVisiblity} />
            </AuthProvider>
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
