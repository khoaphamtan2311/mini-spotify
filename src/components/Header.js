import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Marquee from "react-fast-marquee";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <Marquee style={{ width: "70%" }}>{currentTrackName}</Marquee>
    </div>
  );
}

export default Header;
