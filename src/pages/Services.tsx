import { services } from "../data";
import servicesBanner from "../images/services-banner-2.png";
import { motion } from "framer-motion";

const Services = () => {
  const textVariants = {
    offScreen: { x: 40, opacity: 0 },
    onScreen: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
  };
  const listVariants = {
    offScreen: { x: 20, y: 20, opacity: 0 },
    onScreen: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.4 } },
  };
  const orchestrationVariant = {
    onScreen: { transition: { staggerChildren: 0.2, delayChildren: .2 } }
  };
  return (
    <section className="grid grid-cols-1 place-items-center gap-10 pt-32 w-full md:grid-cols-[4fr_5fr] lg:pt-40 lg:pb-20 lg:gap-16" id="services">
      <motion.div
        variants={orchestrationVariant}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <motion.h2 variants={textVariants} className="text-white font-secondary text-4xl font-semibold capitalize leading-[1.1] md:text-5xl sm:font-medium lg:text-7xl">Buy and sell with ease: </motion.h2>
        <motion.p variants={textVariants} className="text-gray-200 text-sm italic tracking-wide font-secondary -mt-7 sm:text-lg lg:-mt-9">Your One-Stop Shop for All Things Digital.</motion.p>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
          {services.map(({ name, img }) => (
            <motion.li variants={listVariants} className='group flex items-center gap-3'>
              <img alt={name} className='w-8' src={img} />
              <p className='text-gray-300 font-light text-sm pb-2 transition-all duration-500 ease-in-out group-hover:translate-x-3'>{name}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.img
        whileInView={{
          scale: [.5, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 2.8,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        viewport={{ once: true }}
        alt="3d digital currency icons"
        className="w-10/12 sm:w-8/12 md:order-first md:w-full"
        src={servicesBanner}
      />
    </section>
  );
};

export default Services;