/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      height: {
        Header: "80px",
        Main: "592px",
        SponsorSlideshow: "144px",
        GoalContainer: "460px",
        TeamContainer: "350px",
        AwardsContainer: "510px",
        Footer: "310px",
      },
    },
  },
  plugins: [],
};
