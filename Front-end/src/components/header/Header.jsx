import "./header.css";
import { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header ">
      <HeaderLeft toggle={toggle} setToggle={setToggle} />
      
      <HeaderRight />
    </header>
  );
};

export default Header;
