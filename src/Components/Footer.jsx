import { NavLink } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-black text-white p-10 flex flex-col gap-5 ">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <NavLink
            to="/"
            className="btn btn-ghost hover:bg-neutral text-xl text-purple-600"
          >
            <img className="w-10 h-10" src="/logo.png" alt="LOGO" />
            HERO.IO
          </NavLink>
          <div className="flex flex-col gap-3">
            <h1>Social Links</h1>
            <div className="flex justify-between">
              <span className="p-1 rounded-full bg-white">
                <FaXTwitter style={{ color: "black" }} />
              </span>
              <span className="p-1 rounded-full bg-white">
                <FaLinkedinIn style={{ color: "black" }} />
              </span>
              <span className="p-1 rounded-full bg-white">
                <FaFacebookF style={{ color: "black" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
