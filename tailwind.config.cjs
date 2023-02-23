module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeDesktop: "url('/home/background-home-desktop-hq.jpg')",
        homeTablet: "url('/home/background-home-tablet.jpg')",
        homeMobile: "url('/home/background-home-mobile.jpg')",
        destDesktop: "url('/destination/background-destination-desktop-alt.jpg')",
        destTablet: "url('/destination/background-destination-tablet.jpg')",
        destMobile: "url('/destination/background-destination-mobile.jpg')",
        crewDesktop: "url('/crew/background-crew-desktop-alt.jpg')",
        crewTablet: "url('/crew/background-crew-tablet.jpg')",
        crewMobile: "url('/crew/background-crew-mobile.jpg')",
        techDesktop: "url('/technology/background-technology-desktop.jpg')",
        techTablet: "url('/technology/background-technology-tablet.jpg')",
        techMobile: "url('/technology/background-technology-mobile.jpg')",
      },
      colors: {
        bgColor: "#0B0D17",
        fgColor: "#FFFFFF",
        acColor: "#D0D6F9",
      },
      fontFamily: {
        'barlow': 'Barlow, sans-serif',
        'barlow-condensed': 'Barlow Condensed, sans-serif',
        'bellefair': 'Bellefair, serif',
      },
      animation: {
        fade: "fade 800ms ease-in-out",
        slide: "slide 400ms ease-in-out"
      },
      keyframes: {
        fade: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
        slide: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        }
      }
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
