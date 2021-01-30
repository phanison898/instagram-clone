import React from "react";
import Story from "./Story";
import Style from "./Style";

const Stories = () => {
  const classes = Style();
  return (
    <div className={classes.stories}>
      {usernames.map((username, i) => (
        <Story
          key={i}
          profileImage={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`}
          title={username}
        />
      ))}
    </div>
  );
};

const usernames = [
  "Walter",
  "Jessy",
  "Hank",
  "Skinny",
  "Badger",
  "Mike",
  "Gus",
  "Hector",
  "Toco",
  "Tommy",
  "Arthur",
  "John",
  "Finn",
  "Alfie",
];

export default Stories;
