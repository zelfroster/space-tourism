module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBackground: "url('/home/background-home-desktop-hq.jpg')",
        destBackground: "url('/destination/background-destination-desktop-alt.jpg')",
        crewBackground: "url('/crew/background-crew-desktop.jpg')",
        techBackground: "url('/technology/background-technology-desktop.jpg')",
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
        fade: "fade 800ms ease-in-out"
      },
      keyframes: {
        fade: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        }
      }
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
