import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>BADREDDINE SAYAH ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
