import React from "react";

const FooterLink = ({ href, text }) => {
  return (
    <>
      <li>
        <a href={href}>{text}</a>
      </li>
    </>
  );
};

export default FooterLink;
