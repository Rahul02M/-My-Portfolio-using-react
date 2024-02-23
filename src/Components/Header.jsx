import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>RAHUL </h2>
    <div>
      <a href="#home">Home</a>
      <a href="#Work">Skills</a>
      <a href="#Project">Project</a>
      <a href="#Contact">Contact</a>
    </div>
    <a href="mailto:m2003rahul@gamil.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
