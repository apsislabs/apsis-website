import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6125,
  headerFontFamily: ["Lora", "serif"],
  bodyFontFamily: ["OpenSans", "sans-serif"],
  bodyColor: "#4a4a4a",
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontSize: "3rem",
      fontFamily: "Lora-Bold, serif"
    },
    h2: {
      fontFamily: "Lora-Bold, serif",
      fontSize: "2rem"
    },
    h3: {
      fontFamily: "Lora-Bold, serif"
    },
    h4: {
      fontWeight: "900"
    },
    "h3,h4,h5,h6": {
      fontFamily: "OpenSans-Regular, sans-serif",
      fontWeight: "300"
    },
    "h1,h2,h3,h4,h5,h6": {
      color: "#4a5359"
    },
    body: {
      fontSize: "1.25rem",
      fontFamily: "OpenSans-Regular, sans-serif",
      fontWeight: "300"
    }
  })
});
export default typography;
