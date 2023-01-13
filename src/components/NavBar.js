import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map( (link, index) => {
    let href = '#' + links[index];
    return <a key={link} href={href}>{link}</a>
  });

  return (
    <nav>
      {linkElements}
    </nav>
  );
}

export default NavBar;
