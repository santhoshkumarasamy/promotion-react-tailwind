/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#76CDD8",
        "secondary-blue": "#76CDD8",
        "primary-dark-blue": "#1A2B3B",
        "yellow-green": "#C9DB48",
        "secondary-dark-blue": "#0DBBFC",
        "secondary-green": "#69E6A6",
        "bg-blue": "#0A2640",
      },
      fontFamily: {
        source: "'Source Sans Pro', sans-serif",
        "open-sans": "'Open Sans', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      keyframes: {
        "nav-animation-key": {
          "0%": {
            "bottom": "50%",
            "opacity" :"0"
          },
          "100%": {
            "bottom": "0",
            "opacity" :"1"
            
          },
        },
      },
      animation: {
        "nav-animation": "nav-animation-key 1s ease-in-out ",
      },
      backgroundImage:{
        "video" :"url('./assets/video.png')",
        
      }
    },
  },
  plugins: [],
};
