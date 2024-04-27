import { motion } from 'framer-motion';
import globeImg from '../images/globe.png';

const About = () => {
  const variants = {
    offScreen: { y: '120%' },
    onScreen: { y: 0, transition: { type: 'spring', stiffness: 50, damping: 30, duration: 3 } },
  };
  const orchestrationVariant = {
    onScreen: { transition: { staggerChildren: 0.8 } }
  };
  return (
    <section className='pt-32 w-full lg:pt-40 lg:pb-20' id='about'>
      <motion.div
        variants={orchestrationVariant}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <div className="overflow-hidden self-start pb-12">
          <motion.h2 variants={variants} className='self-start text-white text-5xl font-secondary font-medium tracking-wider leading-[1.05] uppercase md:text-7xl lg:text-[100px] lg:font-normal'>Let's get to <br />know each <br />other</motion.h2>
        </div>
        <div className="overflow-hidden self-end pl-2 w-10/12 pb-12 -mt-10 sm:w-8/12">
          <motion.p variants={variants} className='text-gray-300 text-xs font-extralight indent-20 md:text-sm lg:text-base'>WhyKay Exchange is a revolutionary digital asset exchange platform designed to empower you to navigate the exciting world of cryptocurrencies, gift cards, and more. We believe in making the digital asset landscape accessible and user-friendly for everyone, regardless of experience level. We offer an unmatched variety of options, from established cryptocurrencies like Bitcoin (BTC) and Tether (USDT) to convenient everyday solutions like gift cards and e-wallets. This caters to both your long-term investment goals and immediate needs.  Our platform prioritizes both ease of use and security.  Enjoy a smooth experience with a multitude of payment options, from traditional methods like credit cards and wire transfers to alternative funding solutions.</motion.p>
        </div>
      </motion.div>
      <motion.img
        initial={{ y: 40, scale: 0 }}
        whileInView={{ y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 50, damping: 30, duration: 1 }}
        alt='about us illustration'
        className='mx-auto lg:w-8/12'
        src={globeImg}
      />
    </section>
  );
};

export default About;