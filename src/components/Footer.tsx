import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-between gap-3 mx-auto px-6 md:flex-row lg:w-10/12'>
      <p className="text-white/60 text-xs text-center md:text-left">&copy;{new Date().getFullYear()} WhyKay Exchange - All rights reserved</p>
      <ul className="flex items-center gap-4 md:gap-6">
        {/* <li className="text-white/60 text-lg transition-all duration-500 ease-in-out hover:text-brand">
          <a href="https://facebook.com/"><ImFacebook2 /></a>
        </li>
        <li className="text-white/60 text-lg transition-all duration-500 ease-in-out hover:text-brand">
          <a href="https://twitter.com/"><RiTwitterXLine /></a>
        </li> */}
        <li className="text-white/60 text-lg transition-all duration-500 ease-in-out hover:text-brand">
          <a href="https://www.instagram.com/_whykay.soft_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><RiInstagramLine /></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;