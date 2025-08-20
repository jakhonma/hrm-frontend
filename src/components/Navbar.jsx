// src/components/Navbar.jsx
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { FaUsersCog } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-20 bg-white border-b flex items-center justify-between pl-[56px] pr-8 shadow-md ">
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-xl">
          <Link to={"/"}>
            <FaUsersCog size={39} className="text-gray-700" />
          </Link>
          <span className="text-gray-600">HRM System</span>
        </div>

        {/* Search */}
        <div className="relative w-1/6">
          <input
            type="text"
            placeholder="Qidiruv"
            className="input input-bordered w-full rounded-full pr-10 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-400 h-7 md:h-8 lg:h-9 xl:h-9 2xl:h-10 3xl:h-[44px] text-black"
          />
          <BiSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 text-lg pointer-events-none z-10" />
        </div>



        {/* User / Language */}
        <div className="flex items-center gap-8 text-gray-600">
          {/* Language dropdown */}
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="tooltip tooltip-bottom flex cursor-pointer items-center gap-2 py-3 text-[14px] text-gray-700 font-semibold"
                data-tip={"Tez orada"}
              >
                <span>
                  <img src="/flags/uz.svg" alt="" />
                </span>
                <span className="font-montserrat font-[500]">O'zbek </span>
              </div>
              <ul
                tabIndex={0}
                className="z-1 menu dropdown-content w-40 rounded-box bg-base-100 p-2 shadow-sm bg-[#f0fcff]"
              >
                <li>
                  <div className="flex">
                    <span>
                      <img src="/flags/uz.svg" alt="" />
                    </span>
                    <span className="font-montserrat font-semibold">
                      O'zbekcha{" "}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span>
                      <img src="/flags/ru.svg" alt="" />
                    </span>
                    <span className="font-montserrat font-semibold">
                      Русский
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span>
                      <img src="/flags/uk.svg" alt="" />
                    </span>
                    <span className="font-montserrat font-semibold">
                      English
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="xl:hidden" onClick={() => setShowMap(true)}>
              <CgMenuGridO color="white" size={28} className="cursor-pointer" />
            </div>
          </div>

          {/* Mobile menu icon */}
          <div className="xl:hidden" onClick={() => setShowMap(true)}>
            <CgMenuGridO color="gray" size={28} className="cursor-pointer" />
          </div>

          {/* User account */}
          <div className="dropdown dropdown-end">
            <div 
              tabIndex={0} 
              role="button" 
              className="bg-transparent"
            >
              <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.pravatar.cc/40" alt="user" />
                    </div>
              </div>
              {/* <FaUserCircle size={28} className="text-gray-600" /> */}
            </div>

            <ul 
  tabIndex={0} 
  className="menu menu-sm dropdown-content mt-3 w-48 rounded-xl bg-white p-2 shadow-lg border border-gray-100"
>
  {/* User info */}
  <li className="hover:bg-gray-50 rounded-lg transition duration-200">
    <div className="flex items-center gap-2 px-3 py-2">
      {/* <div className="avatar">
        <div className="w-10 rounded-full ring ring-primary/20">
          <img src="https://i.pravatar.cc/40" alt="user" />
        </div>
      </div> */}
      <div>
        <p className="font-medium text-gray-800 text-[15px]">Jahongir Jo'rayev</p>
        {/* <p className="text-xs text-gray-500">Admin</p> */}
      </div>
    </div>
  </li>

  {/* Links */}
  <li className="hover:bg-gray-50 rounded-lg transition duration-200">
    <a className="px-3 py-2 text-[15px] font-medium text-gray-800">
      Profil
    </a>
  </li>
  <li className="hover:bg-gray-50 rounded-lg transition duration-200">
    <Link to={'/login'}>
      <a className="px-3 py-2 text-[15px] font-medium text-gray-800">
        Chiqish
      </a>
    </Link>
    
  </li>
</ul>

          </div>

        </div>
      </header>

      {/* SITE MAP MODAL */}
      {/* <SiteMapModal open={showMap} onClose={() => setShowMap(false)} /> */}
    </>
  );
}

export default Navbar;
