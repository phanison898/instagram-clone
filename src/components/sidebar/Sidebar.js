import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();
  const { photoURL, displayName, email } = useSelector((state) => state.user);

  return (
    <div className={classes.sidebar}>
      <div className={classes.userinfo}>
        <Avatar src={photoURL} />
        <section>
          <h4>{email.split("@")[0]}</h4>
          <p>{displayName}</p>
        </section>
      </div>

      <div className={classes.follow}>
        <div className={classes.follow__heading}>
          <p>Suggestions for you</p>
          <p>See all</p>
        </div>
        <div className={classes.followers}>
          {usernames.map((username, i) => (
            <div key={i} className={classes.follower}>
              <Avatar src={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`} />
              <div>
                <h4>{username}</h4>
                <p>{username}</p>
              </div>
              <h4>Follow</h4>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.about}>
        <div>
          {footerTopLinks.map(({ title, link }, i) => (
            <a href={link} target="_black" key={`top-link-${i}`}>
              {title}
            </a>
          ))}
        </div>
        <p>© 2021 Instagram clone by Phanison</p>
      </div>
    </div>
  );
};

const footerTopLinks = [
  { title: "Github", link: "https://github.com/phanison898" },
  { title: "Linkedin", link: "https://www.linkedin.com/in/phanison225/" },
  { title: "Youtube", link: "https://www.youtube.com/channel/UC4FAldAo2Ow_2F447yggcqA" },
  { title: "Instagram", link: "https://www.instagram.com/phanison225/" },
  { title: "Twitter", link: "https://twitter.com/phanison225" },
];

const usernames = ["Walter", "Jessy", "Hank", "Skinny"];

export default Sidebar;
