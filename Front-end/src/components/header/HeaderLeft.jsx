import { Link } from "react-router-dom";
import Travel from '../../assets/img/logotravel.png'
import { useEffect, useState } from "react";

const HeaderLeft = ({ setToggle, toggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-left ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo">
      
      </Link>

      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className="nav-link"
            >
              <i className="bi bi-house"></i>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/home"
              onClick={() => setToggle(false)}
              className="nav-link"
            >
              <i className="bi bi-newspaper"></i>Latest Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/posts"
              onClick={() => setToggle(false)}
              className="nav-link"
            >
              <i className="bi bi-stickies"></i>Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/posts/create-post"
              onClick={() => setToggle(false)}
              className="nav-link"
            >
              <i className="bi bi-journal-plus"></i>Create
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Admin-dashboard"
              onClick={() => setToggle(false)}
              className="nav-link"
            >
              <i className="bi bi-person-check"></i>Admin Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header-left {
          background-color: transparent;
          transition: background-color 0.3s ease-in-out;
        }

        .header-left.scrolled {
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default HeaderLeft;
