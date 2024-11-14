/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,css,js,jsx,ts,tsx,sass,scss}",
  ],
  theme: {
    extend: {},
    colors: {
      "blue": "#007BFF", //Principal color
      "softBlue": "#5BC0EB",
      "taskmasterBlue": "##105A77",
      
      "green": "#28A745", //Secundary color
      "softGreen": "#85E3B1",
      "taskmasterYellow": "##D6B56E",

      "yellow": "#FFC107", //Warning color
      "softYellow": "#F6EB61",

      "red": "#DC3545", //Error color
      "softRed": "#F28D8D",

      "white": "#FFFFFF", //Background color
      "lightGrey": "#F8F9FA",
      "softGrey": "#F0F4F8",
      "taskmasterGrey": "##D5D9D7",

      "grey": "#343A40", // Text color
      "darkGrey": "#4B4B4D",
      
      "orange": "#FD7E14", // Emphasis color
      "lavender": "#C8B6E2",
    }
  },
  plugins: [],
}