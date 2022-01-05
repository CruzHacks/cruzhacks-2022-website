import { theme } from "./props"

// This serves as theming props for the footer component
// homeFooter will probably be removed later due to the design omission of sponsors
// homeFooterSponsors will be the primary theme to roll out on production for the /home route

interface FooterTheme {
  teamFooter: theme
  homeFooter: theme
  homeFooterSponsors: theme
}

const footerThemes: FooterTheme = {
  teamFooter: {
    bgColor: "#34486B",
    iconFill: "#C7DAFF",
    iconStroke: "#34486B",
    textColor: "#FDFDEE",
    hillColor: "#445D88",
  },
  homeFooter: {
    bgColor: "#467A94",
    iconFill: "#FFEAEA",
    iconStroke: "#3289BA",
    textColor: "#FFFFFF",
    // hillColor: "#70A8C8",
  },
  homeFooterSponsors: {
    bgColor: "#020D51",
    iconFill: "#FFE2E2",
    iconStroke: "#020D51",
    textColor: "#FFFFFF",
    hillColor: "#020D51",
  },
}

export default footerThemes
