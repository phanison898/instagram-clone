import React from "react";
import Style from "./Style";

const Footer = () => {
  const classes = Style();
  return (
    <div className={classes.footer}>
      <div className={classes.footer__links}>
        {footerTopLinks.map(({ title, link }, i) => (
          <a href={link} target="_black" key={`top-link-${i}`}>
            {title}
          </a>
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
const footerMiddleLinks = [
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

const footerTopLinks = [
  { title: "Github", link: "https://github.com/phanison898" },
  { title: "Linkedin", link: "https://www.linkedin.com/in/phanison225/" },
  { title: "Youtube", link: "https://www.youtube.com/channel/UC4FAldAo2Ow_2F447yggcqA" },
  { title: "Instagram", link: "https://www.instagram.com/phanison225/" },
  { title: "Twitter", link: "https://twitter.com/phanison225" },
];

const footerBottomLinks = ["English ▿", "© 2021 Instagram clone by Phanison"];
