import { useState, useEffect } from "react";
import { ButtonFilled } from "components/Button";
import { NavLink } from "components/Links";
import CircularAvatar from "components/CircularAvatar";
import Navmenu from "components/Menu";
import { useAuth } from "features/authentication";
import logo from "assets/logo/logo.png";
import { Link } from "react-router-dom";

function MobileMenu(props) {
  return (
    <div className="flex justify-end sm:mr-5 mt-16">
      <ul className="flex flex-col gap-5 justify-start items-start w-full sm:w-2/6 p-5 bg-primary-300 shadow-xl rounded-2xl">
        <li>
          <NavLink to="/" onClick={props.closeNavbar}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.closeNavbar}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.closeNavbar}>
            Features
          </NavLink>
        </li>
        {props.user === null ? (
          <>
            <li>
              <NavLink to="/login" onClick={props.closeNavbar}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" onClick={props.closeNavbar}>
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="w-full px-3">
              <hr className="opacity-20" />
            </li>
            <li>
              <NavLink to="/settings" onClick={props.closeNavbar}>
                Settings
              </NavLink>
            </li>
            <li
              className="flex flex-col px-3 w-full"
              onClick={props.closeNavbar}
            >
              <Link to="/sharework">
                <ButtonFilled>Share work</ButtonFilled>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

function Cover(props) {
  return (
    <div className="fixed w-screen h-screen backdrop-blur bg-gray bg-opacity-30 z-40 top-0 md:hidden animate-fadein">
      <MobileMenu closeNavbar={props.closeNavbar} user={props.user} />
    </div>
  );
}

function Navbar() {
  // ===================== Authentication state ==================
  const { user } = useAuth();

  //
  // ======================== UI states ==========================
  // Menu open or close
  const [isOpen, setIsOpen] = useState(false);
  // Blur and shadow on scroll
  const [showNavbarShadow, setShowNavbarShadow] = useState(false);

  // scroll event listener
  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset === 0) {
        setShowNavbarShadow(false);
      } else {
        setShowNavbarShadow(true);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      {isOpen ? <Cover closeNavbar={handleOpen} user={user} /> : null}
      <nav
        className={`
    flex px-4 md:px-10 lg:px-20 py-3 lg:py-2 justify-between items-center sticky top-0
    z-40
    ${
      showNavbarShadow
        ? "shadow-lg shadow-primary-500 backdrop-blur bg-primary-400 bg-opacity-75"
        : ""
    }`}
      >
        <div>
          <Link to="/">
            <img src={logo} className="w-[6rem]" alt="Logo" />
          </Link>
        </div>

        {/* mobile only */}
        <div className="md:hidden lg:hidden">
          <Navmenu isOpen={isOpen} onClick={handleOpen} />
        </div>

        <div className="hidden md:flex lg:flex xl:flex items-center justify-between md:gap-8 lg:gap-10 text-[90%]">
          <NavLink>Services</NavLink>
          <NavLink>Features</NavLink>
          {user ? (
            <div className="flex">
              <div className="flex pr-10 items-center">
                <Link to="/sharework">
                  <ButtonFilled>Share work</ButtonFilled>
                </Link>
              </div>
              <Link to="/settings">
                {user.photoUrl ? (
                  <CircularAvatar img={user.photoUrl} />
                ) : (
                  <CircularAvatar letter={user.displayName[0]} />
                )}
              </Link>
            </div>
          ) : (
            <div>
              <NavLink to="/login">Sign in</NavLink>
              <span>|</span>
              <NavLink to="/signup">Sign up</NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
