import React from "react";

const HeaderLink = ({ href, text }) => {
  return (
    <>
      <a
        href={href}
        className="cursor-pointer transition-colors duration-300 hover:text-customYellow">
        {text}
      </a>
    </>
  );
};

export default HeaderLink;
