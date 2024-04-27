import { ImWhatsapp } from 'react-icons/im';
import bannerImg from '../images/bannerImg.png';
import icon1 from '../images/icon-1.png';
import icon2 from '../images/icon-2.png';
import icon3 from '../images/icon-3.png';
import { motion, Variants } from 'framer-motion';

const Home = () => {
  const variants = {
    offScreen: { y: '120%', opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 30, duration: 3 } },
  };
  const buttonVariants = {
    offScreen: { y: '110%', opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 20, duration: 2 } },
  };
  const orchestrationVariant = {
    onScreen: { transition: { staggerChildren: 0.5, delayChildren: .2 } }
  };
  const imgVariants: Variants = {
    offScreen: { opacity: 0 },
    onScreen: { opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 1, delay: 2 } },
    animate: {
      rotateZ: 720,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 30,
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: .5
      }
    }
  };
  return (
    <section className='relative flex flex-col items-center pt-32 pb-8 w-full md:pt-36 lg:pb-20 lg:block lg:pt-44' id='home'>
      <motion.div
        variants={orchestrationVariant}
        initial='offScreen'
        animate='onScreen'
        viewport={{ once: true }}
        role='banner'
        className='w-full'
      >
        <div className="overflow-hidden">
          <motion.h1 variants={variants} className='text-overlay text-white text-5xl font-secondary font-bold leading-[1.1] pb-2 sm:text-6xl md:text-[80px] md:pb-12'>Dive into <br /> the Future of <br /> Crypto Trading!</motion.h1>
        </div>
        <div className="overflow-hidden sm:w-[70%] md:w-1/2">
          <motion.p variants={variants} className='text-gray-300 text-xs font-extralight pl-2 pb-12 '>Trade your digital assets for instant cash on WhyKay Xchange. Start accepting payments and making money today.</motion.p>
        </div>
        <div className="overflow-hidden sm:mb-6">
          <a href='https://wa.me/+2348026580836' target='_blank' rel='noreferrer'>
            <motion.button variants={buttonVariants} whileTap={{ scale: 0.85 }} aria-label='Trade on Whatsapp' className='flex items-center gap-1 bg-brand px-6 py-3 rounded-full border border-transparent text-sm font-medium hover:underline sm:px-8 sm:py-4 sm:text-normal'>
              <ImWhatsapp /> Trade on Whatsapp
            </motion.button>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 8, duration: 1, delay: 1 }}
        className='top-24 right-0 -z-10 sm:w-10/12 md:absolute md:w-8/12 lg:w-1/2 lg:top-36'
      >
        <img alt='We trade digital assets' className='' src={bannerImg} />
      </motion.div>
      <motion.img variants={imgVariants} initial='offScreen' animate='animate' whileInView='onScreen' viewport={{ once: true }} alt='icon' className='hidden absolute top-32 right-1/3 w-20 lg:block' src={icon1} />
      <motion.img variants={imgVariants} initial='offScreen' animate='animate' whileInView='onScreen' viewport={{ once: true }} alt='icon' className='hidden absolute bottom-40 right-[72%] w-10 lg:block' src={icon2} />
      <motion.img variants={imgVariants} initial='offScreen' animate='animate' whileInView='onScreen' viewport={{ once: true }} alt='icon' className='hidden absolute bottom-24 right-1/4 w-6 lg:block' src={icon3} />
    </section>
  );
};

export default Home;