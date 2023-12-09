import React from "react";
import Button from "./Button";

//const list = ["All", "Gaming", "Music"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Podcasts" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Programming" />
      <Button name="AI" />
      <Button name="Live" />
      <Button name="Watched" />
      <Button name="New to you" />
    </div>
  );
};

export default ButtonList;
