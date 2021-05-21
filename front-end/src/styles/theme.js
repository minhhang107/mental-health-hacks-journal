const theme = {
  colors: {
    text: {
      default: "rgba(32, 69, 83, var(--text-opacity, 0.85));",
    },

    blue: {
      default: "rgba(95, 153, 255, var(--bg-opacity, 1))",
      100: "rgba(236, 243, 250, var(--bg-opacity, 1))",
      200: "rgba(212, 228, 243, var(--bg-opacity, 1))",
      300: "rgba(183, 203, 222, var(--bg-opacity, 1))",
    },
    green: "rgba(32, 69, 83, var(--bg-opacity, 1))",
    orange: "rgba(255, 138, 0, var(--bg-opacity, 1))",
  },
  spacing: {
    1: "0.4rem",
    2: "0.8rem",
    3: "1.6rem",
    4: "2.4rem",
    5: "3.2rem",
    6: "4.8rem",
  },

  fontFamily: {
    heading: "'Cormorant', serif",
    body: "'Ubuntu', sans-serif",
  },

  rounded: {
    default: "1.2rem",
  },
};

export default theme;
