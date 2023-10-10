import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "../../pages/FullPage/FullPage.scss";
import { slide as Menu } from "react-burger-menu";
// Import the CSS file for react-burger-menu

const Navbar = () => {
  let { slug } = useParams();
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (url) => {
    window.open(url, "_blank");
  };

  // Define the threshold widths for showing different navbars
  const breakpointX = 768; // X size
  const breakpointY = 1024; // Y size

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleOnOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  if (screenWidth < breakpointX) {
    return (
      <div
        className={
          slug
            ? "mainNav bg-green"
            : location.pathname === "/ayapel"
            ? "mainNav bg-green"
            : "mainNav"
        }
      >
        <section>
          <NavLink to={"/"}>
            <figure>
              <img
                src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg"
                alt="Logo"
              />
            </figure>
          </NavLink>
        </section>

        <nav className="mainNav__nav">
          <Menu
            width={"100px"}
            right
            // isOpen={isOpen}
            // onOpen={handleOnOpen}
            // onClose={handleOnClose}
            // customCrossIcon={<img src='https://res.cloudinary.com/dgnwqr93n/image/upload/v1689103575/menu_crcpkr.png' alt='Close' height={'50px'} width={'50px'}/>}
            // customBurgerIcon={<img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1689103575/menu_crcpkr.png" alt="Menu" height={'50px'} width={'50px'}/>}
          >
            <NavLink to={"/nosotros"}>Nosotros</NavLink>
            <NavLink to={"/que-hacemos"}>Nuestros proyectos</NavLink>
            {/* <NavLink to={'https://corpoayapelartesanias.com/'}>Artesanias</NavLink> */}
            <NavLink to={"/donaciones"}>Donaciones</NavLink>
            <NavLink to={"/como-ayudar"}>¿Cómo puedo ayudar?</NavLink>
            {/* <NavLink to={'/ayapel'}>Ayapel</NavLink> */}
            <NavLink to={"/documentos"}>Documentos</NavLink>
            <NavLink to={"/cultura"}>Cultura</NavLink>
          </Menu>
        </nav>
      </div>
    );
  }

  if (screenWidth > breakpointY) {
    return (
      <div
        className={
          slug
            ? "mainNav bg-green div"
            : location.pathname === "/ayapel"
            ? "mainNav div bg-green"
            : "mainNav div"
        }
      >
        <nav className="mainNav__nav">
          <ul>
            <NavLink to={"/nosotros"} className='effect'>Nosotros</NavLink>
            <NavLink to={"/que-hacemos"} className='effect'>Nuestros proyectos</NavLink>
            <NavLink to={"https://corpoayapelartesanias.com/"} className='effect'>
              Artesanias
            </NavLink>
            <NavLink to={""}>
              <figure>
                <img
                  src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg"
                  alt=""
                />
              </figure>
            </NavLink>
            <NavLink to={"/donaciones"} className='effect'>Donaciones</NavLink>
            <NavLink to={"/como-ayudar"} className='effect'>¿Cómo puedo ayudar?</NavLink>
            <div className={`menu-container ${isOpen ? "open" : ""}`} >
              <span className="menu-trigger" onClick={handleMenuClick} >
                Ayapel
              </span>
              {isOpen && (
                <ul className="menu-dropdown">
                  <li
                    onClick={() =>
                      handleMenuItemClick("https://corpoayapel.sanity.studio/")
                    }
                  >
                    Administración
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div
      className={
        slug
          ? "mainNav bg-green div"
          : location.pathname === "/donaciones"
          ? "mainNav div bg-green"
          : "mainNav div"
      }
    >
      <section>
        <NavLink to={"/"}>
          <figure>
            <img
              src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg"
              alt="Logo"
            />
          </figure>
        </NavLink>
      </section>

      <nav className="mainNav__nav">
        <Menu
          width={"100px"}
          right
          isOpen={isOpen}
          onOpen={handleOnOpen}
          onClose={handleOnClose}
          // customCrossIcon={<img src='https://res.cloudinary.com/dgnwqr93n/image/upload/v1689103575/menu_crcpkr.png' alt='Close' height={'50px'} width={'50px'}/>}
          // customBurgerIcon={<img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1689103575/menu_crcpkr.png" alt="Menu" height={'50px'} width={'50px'}/>}
        >
          <NavLink to={"/nosotros"}>Nosotros</NavLink>
          <NavLink to={"/que-hacemos"}>Nuestros proyectos</NavLink>
          <NavLink to={"https://corpoayapelartesanias.com/"}>
            Artesanias
          </NavLink>
          <NavLink to={"/donaciones"}>Donaciones</NavLink>
          <NavLink to={"/como-ayudar"}>¿Cómo puedo ayudar?</NavLink>
          <NavLink to={"/ayapel"}>Ayapel</NavLink>
          <NavLink to={"/documentos"}>Documentos</NavLink>
          <NavLink to={"/cultura"}>Cultura</NavLink>
        </Menu>
      </nav>
    </div>
  ); // Handle the case when the screen width doesn't match any condition
};

export default Navbar;
