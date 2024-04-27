import { motion } from 'framer-motion';
import CustomButton from './CustomButton';
import NavItems from './NavItems';

const Navmenu = () => {
    const variants = {
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
    };
    const itemsVariants = {
        open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
        closed: { y: 20, opacity: 0, transition: { y: { stiffness: 1000 } } }
    };
    const menuItems = [{ no: '01', value: 'About' }, { no: '02', value: 'Services' }, { no: '03', value: 'Testimonials' }, { no: '04', value: 'Contact' }];
    return (
        <motion.ul variants={variants} className='flex flex-col gap-3 items-center'>
            {menuItems.map(item => <NavItems key={item.no} {...item} />)}
            <motion.li variants={itemsVariants}>
                <a href="https://wa.me/+2348026580836" aria-label='trade now'><CustomButton text='trade now' /></a>
            </motion.li>
        </motion.ul>
    );
};

export default Navmenu;
