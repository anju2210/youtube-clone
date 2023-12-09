import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdVideoLibrary,
  MdOutlineHistory,
  MdWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { LuThumbsUp } from "react-icons/lu";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="border-b-2 border-gray-200">
        <li className="py-2 hover:bg-zinc-200 ">
          <Link to="/" className="flex items-center gap-2 ">
            <MdHomeFilled />
            <span className="text-sm ">Home</span>
          </Link>
        </li>
        <li className="py-2 flex items-center gap-2">
          <SiYoutubeshorts />
          <span className="text-sm">Shorts</span>
        </li>
        <li className="py-2 flex items-center gap-2">
          <MdSubscriptions />
          <span className="text-sm">Subscriptions</span>
        </li>
      </ul>

      <ul>
        <li className="py-2 flex items-center gap-2">
          <MdVideoLibrary />
          <span className="text-sm">Library</span>
        </li>
        <li className="py-2 flex items-center gap-2">
          <MdOutlineHistory />
          <span className="text-sm">History</span>
        </li>
        <li className="py-2 flex items-center gap-2">
          <MdWatchLater />
          <span className="text-sm">Watch later</span>
        </li>
        <li className="py-2 flex items-center gap-2">
          <LuThumbsUp />
          <span className="text-sm">Liked videos</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
