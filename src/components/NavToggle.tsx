import { motion } from 'framer-motion';
import { useGlobalContext } from '../context';

const NavToggle = () => {
    const { setIsOpen } = useGlobalContext();
    return (
        <motion.div
            onClick={setIsOpen}
            className="flex flex-col items-end justify-center gap-[5px] rounded-full"
        >
            <motion.span
                variants={{
                    open: { rotate: 225, y: 7 }, closed: { rotate: 0, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="w-6 h-[2px] bg-white rounded-md"
            ></motion.span>
            <motion.span
                variants={{
                    open: { opacity: 0 }, closed: { opacity: 1 }
                }}
                transition={{ duration: 0.5 }}
                className="w-4 h-[2px] bg-white rounded-md"
            ></motion.span>
            <motion.span
                variants={{
                    open: { rotate: -225, y: -7, width: '1.5rem' }, closed: { rotate: 0, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="w-5 h-[2px] bg-white rounded-md"
            ></motion.span>
        </motion.div>
    );
};

export default NavToggle;