import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineMenu, AiOutlineClose, AiFillYoutube, AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
<header className='flex items-center justify-between xl:justify-start p-2 w-full py-4 px-8 {w-10vh} z-50 bg-[#ecf5fb]'>
          <div className='flex text-xl mr-5 cursor-pointer'>  
            <a href="https://www.youtube.com/@viejaminga1800"><AiFillYoutube className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-red-400'/></a>
            <a href="https://www.instagram.com/viejaminga/"><AiFillInstagram className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-violet-400'/></a>
            <AiFillTwitterCircle className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-blue-400'/>
            <AiOutlineWhatsApp className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-green-400'/>
          </div>
<nav name="Header" className={`fixed bg-[#ecf5fb] w-[100%] md:w-[100%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-700 z-50 font-bold text-primary cursor-pointer`}>    
<button
  onClick={() => setShowMenu(!showMenu)}
   className="xl:hidden text-xl p-2 cursor-pointer">
    {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
</button>
                <Link to="About" className='rounded-lg p-1 space-y-1 hover:bg-red-500 hover:ring-sky-500 transition-all duration-500'>
                  Minga
                </Link>
                <Link to="Fotos" className='rounded-lg p-1 space-y-1 hover:bg-yellow-500 hover:ring-sky-500 transition-all duration-500'>
                 Fotos
                </Link>
                <Link to="Videos" className='rounded-lg p-1 space-y-1 hover:bg-sky-500 hover:ring-sky-500 transition-all duration-500'>
                 Videos
                </Link>
                <Link to="Integrantes" className='rounded-lg p-1space-y-1 hover:bg-yellow-500 hover:ring-sky-500 transition-all duration-500'>
                  Integrantes
                </Link>
         <div className='flex xl:hidden text-xl cursor-pointer'>    
            <AiFillYoutube className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-red-400'/>
            <AiFillInstagram className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-violet-400'/>
            <AiFillTwitterCircle className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-blue-400'/>
            <AiOutlineWhatsApp className='box-content py-1 px-1 rounded-lg hover:shadow-inner duration-300 hover:text-green-400'/>
        </div>
</nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 cursor-pointer">
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </header>
  )
}
export default Header