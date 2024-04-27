import { motion } from 'framer-motion';
import { useGlobalContext } from '../context';
import logo from '../images/whykay-xchange.png';
import NavToggle from './NavToggle';
import Submenu from './Submenu';

const Navbar = () => {
	const { isOpen } = useGlobalContext();
	return (
		<nav className="fixed top-12 left-0 right-0 w-[90vw] max-w-[660px] mx-auto z-20">
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				className="flex items-center justify-between bg-cardBg/95 border-2 border-cardBorder/95 backdrop-blur-sm rounded-2xl px-4 py-4"
			>
				<button><a href="#home" aria-label='back to top'><img src={logo} alt="Oluwatobi Salau" className='w-16' /></a></button>
				<button aria-label='toggle submenu'><NavToggle /></button>
			</motion.div>
			<Submenu />
		</nav >
	);
};

export default Navbar;