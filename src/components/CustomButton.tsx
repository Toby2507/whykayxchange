import { motion } from 'framer-motion';

interface ICustomButton {
    text: string;
}

const CustomButton = ({ text }: ICustomButton) => {
    const variants = {
        offScreen: { y: 40, opacity: 0 },
        hover: { scale: 1.1 },
        onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
    };
    return (
        <motion.button
            variants={variants}
            initial={['initial', 'offScreen']}
            whileHover='hover'
            whileTap={{ scale: 0.9 }}
            whileInView='onScreen'
            viewport={{ once: true }}
            className='relative w-44 h-12 border border-brand overflow-clip mt-2'
        >
            <motion.div
                variants={{
                    initial: { x: '-100%', skewX: '-10deg' },
                    hover: { x: '0%', scale: 1.1 }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
                className='absolute top-0 -left-2 w-[110%] h-full bg-brand'
            ></motion.div>
            <motion.h3
                variants={{
                    initial: { color: "#EA603F" },
                    hover: { color: "#000", transition: { duration: 0, delay: 0.2 } }
                }}
                className="absolute top-0 left-0 w-full h-full grid place-items-center font-medium capitalize tracking-widest z-10 hover:font-semibold"
            >{text}</motion.h3>
        </motion.button>
    );
};

export default CustomButton;