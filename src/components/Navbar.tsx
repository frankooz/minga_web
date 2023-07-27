import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoSpotify } from "react-icons/Bi";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="grid place-items-end bg-blue-200">
      <div className="flex text-xl p-4 xl:mr-10">
        <a
          href="https://www.youtube.com/@viejaminga1800"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube className="box-content py-1 px-1 rounded-full duration-300 hover:text-red-400 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/viejaminga/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="box-content py-1 px-1 rounded-full duration-300 hover:text-violet-500 cursor-pointer" />
        </a>
        <a
          href="https://open.spotify.com/artist/5PkHveCqmI7ak4FtbTbBfZ"
          target="blank"
          rel="noopener noreferrer"
        >
          <BiLogoSpotify className="box-content py-1 px-1 rounded-full duration-300 hover:text-green-500 cursor-pointer" />
        </a>
      </div>
      <div className="flex items-center justify-between xl:justify-start p-10 w-full h-20 {w-10vh} z-50">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden text-2xl px-2 py-2 rounded-full cursor-pointer hover:shadow-inner duration-500 hover:text-red-500"
        >
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <Link to="/">
          <div className="mt-[-50px] xl:ml-10">
            <img src="logo.svg" className="w-40 h-40 xl:ml-10" />
          </div>
        </Link>
        <nav
          className={`fixed text-base bg-gray-200 opacity-80 w-[100%] md:w-[50%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-700 z-50 font-semibold text-primary`}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="xl:hidden text-2xl p-2 rounded-full cursor-pointer hover:shadow-inner duration-500 hover:text-white"
          >
            {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <Link
            to="/"
            className="rounded-full p-1 space-y-1 hover:bg-red-500 hover:ring-sky-500 transition-all duration-500"
          >
            Inicio
          </Link>
          <Link
            to="/Fotos"
            className="rounded-full p-1 space-y-1 hover:bg-yellow-500 hover:ring-sky-500 transition-all duration-500"
          >
            Fotos
          </Link>
          <Link
            to="/Integrantes"
            className="rounded-full p-1 space-y-1 hover:bg-green-500 hover:ring-sky-500 transition-all duration-500"
          >
            Integrantes
          </Link>
          <Link
            to="/Contacto"
            className="rounded-full p-1 space-y-1 hover:bg-violet-500 hover:ring-sky-500 transition-all duration-500"
          >
            Contacto
          </Link>

          <div className="flex xl:hidden text-2xl cursor-pointer">
            <a
              href="https://www.youtube.com/@viejaminga1800"
              target="blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube className="box-content py-1 px-1 rounded-full duration-300 hover:text-red-400 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/viejaminga/"
              target="blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="box-content py-1 px-1 rounded-full duration-300 hover:text-violet-500 cursor-pointer" />
            </a>
            <a
              href="https://open.spotify.com/artist/5PkHveCqmI7ak4FtbTbBfZ"
              target="blank"
              rel="noopener noreferrer"
            >
              <BiLogoSpotify className="box-content py-1 px-1 rounded-full duration-300 hover:text-green-500 cursor-pointer" />
            </a>
          </div>
        </nav>
        <div className="text-3xl px-2 py-2 rounded-full hover:shadow-inner duration-500 hover:text-red-500 cursor-pointer xl:mr-10">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
