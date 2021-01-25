import React from "react";
import Style from "./Style";

const Footer = () => {
  const classes = Style();
  return (
    <div className={classes.footer}>
      <div className={classes.footer__links}>
        {footerTopLinks.map((link, i) => (
          <p key={`top-link-${i}`}>{link}</p>
        ))}
      </div>
      <div className={classes.footer__links}>
        {footerMiddleLinks.map((link, i) => (
          <p key={`middle-link-${i}`}>{link}</p>
        ))}
      </div>
      <div className={classes.footer__links}>
        {footerBottomLinks.map((link, i) => (
          <p key={`bottom-link-${i}`}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;

// Array of Instagram footer link texts
const footerTopLinks = [
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privary",
  "Terms",
  "Top Accounts",
  "Hashtags",
  "Locations",
];

const footerMiddleLinks = [
  "Beauty",
  "Dance & Performance",
  "Fitness",
  "Food & Drink",
  "Home & Garden",
  "Music",
  "Visual Arts",
];

const footerBottomLinks = ["English ^", "O 2021 Instagram from Facebook"];
