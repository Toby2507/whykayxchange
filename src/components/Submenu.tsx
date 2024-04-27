import { motion } from 'framer-motion';
import { useGlobalContext } from '../context';
import Navmenu from './Navmenu';

const Submenu = () => {
    const { isOpen } = useGlobalContext();
    const submenuVariant = {
        open: {
            display: 'block',
            clipPath: `circle(150% at 50% 50%)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(0% at 50% 50%)",
            transition: {
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.1
            },
            transitionEnd: { display: "none", }
        }
    };
    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={submenuVariant}
            className='bg-cardBg/95 border-2 border-t-0 border-cardBorder/95 rounded-2xl rounded-t-none px-4 py-3 mx-3 -mt-[2px] md:w-96 md:mx-auto'
        >
            <Navmenu />
        </motion.div>
    );
};

export default Submenu;