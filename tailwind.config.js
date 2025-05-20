/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'audi-purple': '#7B61FF',
      },
      scrollSnapType: {
        y: 'y mandatory',
      },
      fontFamily:{
        drukTrial: ["Druk Trial", "sans-serif"],
        drukTextTrial: ["Druk Text Trial", "sans-serif"],
        drukTextWideTrial: ["Druk Text Wide Trial", "sans-serif"],
        drukWideTrial: ["Druk Wide Trial", "sans-serif"],
        drukCondTrial: ["Druk Cond Trial", "sans-serif"],
        drukXCondTrial: ["Druk XCond Trial", "sans-serif"],
        drukXXCondTrial: ["Druk XXCond Trial", "sans-serif"],
        handWritten: ["Handwriting", "sans-serif"],
        geostar: ["Geostar Fill", "serif"],
        maelstrom: ["Maelstrom", "serif"],
        migraExtrabold: ["Migra-Extrabold", "serif"],
        migraExtralight: ["Migra-Extralight", "serif"],
        taskerGrotesk:["Tusker-Grotesk", "sans-serif"]
      },
    },
  },
  plugins: [],
}