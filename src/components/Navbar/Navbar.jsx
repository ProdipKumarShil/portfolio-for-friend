import Headroom from "react-headroom";
import { HashLink as Link } from "react-router-hash-link";

const myLinks = (
  <>
    <li>
      <Link
        smooth
        to="#"
        className="hover:bg-white text-white hover:text-black">
        Home
      </Link>
    </li>
    <li>
      <Link
        smooth
        to="#project"
        className="hover:bg-white text-white hover:text-black">
        Projects
      </Link>
    </li>
    <li>
      <Link
        smooth
        to="#experience"
        className="hover:bg-white text-white hover:text-black">
        Experience
      </Link>
    </li>
    <li>
      <Link
        smooth
        to="#contact"
        className="hover:bg-white text-white hover:text-black">
        Contact
      </Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <Headroom
      style={{
        zIndex: 50,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}>
      <div className="bg-[#222] nav-shadow z-40">
        <div className="navbar max-w-screen-xl mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-[#161513]">
                {myLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-white text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{myLinks}</ul>
          </div>
          <div className="navbar-end">
            <button className="border-white border-2 text-white hover:bg-gradient-to-br from-[#9A33FF] to-[#FF8660] duration-500 hover:border-black  py-3 px-7 rounded-full font-bold active:scale-95 ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
