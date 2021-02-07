import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import User from "../../components/users/user/User";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();
  const { photoURL, displayName, username, uid } = useSelector((state) => state.user);
  const people = useSelector((state) => state.people);

  return (
    <div className={classes.root}>
      <div className={classes.logged__user}>
        <Avatar src={photoURL} />
        <Link to={`/${displayName}/profile?id=${uid}`}>
          <h4>{displayName}</h4>
          <p>{username}</p>
        </Link>
      </div>

      <div className={classes.followUsers}>
        <div className={classes.followUsers__heading}>
          <p>Suggestions for you</p>
          <Link to={`/${displayName}/users`}>See all</Link>
        </div>
        <div className={classes.followUsers__users}>
          {people.map((user, i) => i < 5 && <User key={`sidebar-user-${i}`} {...user} />)}
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

const users = [
  {
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Walter White",
    username: "Walter123",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Walter White",
    username: "Walter123",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Walter White",
    username: "Walter123",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Walter White",
    username: "Walter123",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Walter White",
    username: "Walter123",
  },
];

export default Sidebar;
