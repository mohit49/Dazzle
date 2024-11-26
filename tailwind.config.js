/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		container: {
			center: true, // Centers the container by default
			padding: '1rem', // Adds default padding
		  },
		  screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		  },
		  // You can also override the container width at each breakpoint
		  container: {
			screens: {
			  sm: '100%', // Full-width on smaller screens
			  md: '720px', // Custom width for medium screens
			  lg: '960px',
			  xl: '1140px',
			  '2xl': '1320px',
			},
		  },
  		colors: {
  			'dazzle-dark': '#131313',
  			'dazzle-primary': '#ffffff',
  			'dazzle-white': '#ffffff',
  			'dazzle-gray': '#4e4e4e'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
