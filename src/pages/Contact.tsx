import { motion } from "framer-motion";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  const [message, setMessage] = useState<string>('');
  const leadVariants = {
    offScreen: { y: '120%' },
    onScreen: { y: 0, transition: { type: 'spring', stiffness: 50, damping: 30, duration: 3 } },
  };
  const inputVariants = {
    offScreen: { x: -40, opacity: 0 },
    onScreen: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8, delay: 0.2 } },
  };
  const buttonVariants = {
    offScreen: { x: 40, opacity: 0 },
    tap: { scale: 0.85 },
    onScreen: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8, delay: 0.2 } },
  };
  const orchestrationVariant = {
    onScreen: { transition: { staggerChildren: 0.2, delayChildren: .4 } }
  };
  const textVariants = {
    offScreen: { y: 40, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } },
  };
  return (
    <motion.section
      initial='offScreen'
      whileInView='onScreen'
      whileTap='tap'
      viewport={{ once: true }}
      className="flex flex-col items-center gap-14 pt-32 w-full md:gap-20 lg:pt-40 lg:gap-32"
      id="contact"
    >
      <div className="overflow-hidden pt-2">
        <motion.h2 variants={leadVariants} className="text-white text-5xl font-secondary text-center tracking-wider leading-[1.0] md:text-7xl lg:text-[100px]">
          LET`S WORK <br />TOGETHER
        </motion.h2>
      </div>
      <div className="flex gap-2 w-full md:gap-4 md:w-10/12 lg:gap-6 lg:w-7/12">
        <motion.input
          type='text'
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="flex-1 bg-transparent border border-white/70 rounded-full focus:outline-none px-4 py-2 text-white/70 text-sm font-light placeholder:text-white/70 md:px-8 md:py-4 lg:px-10"
          variants={inputVariants}
          placeholder="Your message"
        />
        <motion.button variants={buttonVariants} className="bg-white px-5 py-2 rounded-3xl md:px-8 md:py-4 md:rounded-full lg:px-10">
          <a href={`https://wa.me/+2348026580836?text=${encodeURIComponent(message)}`} target='_blank' rel='noreferrer'>
            <div className="flex items-center">
              <p className="tracking-wide md:text-xl">Send</p>
              <div className='border-b border-black ml-2 h-1 w-6 md:ml-3 md:w-12 lg:ml-4 lg:w-16' />
              <div className='border-b border-r border-black mt-[0.2rem] -ml-1 h-1 w-1 -rotate-45 md:mt-[0.15rem]' />
            </div>
          </a>
        </motion.button>
      </div>
      <motion.div
        variants={orchestrationVariant}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-10 w-9/12 md:flex-row lg:gap-20"
      >
        <div className="flex flex-col justify-center max-w-xs">
          <motion.h2 variants={textVariants} className='flex items-center gap-2 text-white text-2xl font-secondary font-normal tracking-wide leading-[1.05] pb-12 md:font-medium'>
            <MdLocalPhone className="text-brand" />Call Us
          </motion.h2>
          <motion.p variants={textVariants} className='self-end text-gray-300 text-xs font-extralight indent-20 pl-2 w-10/12 pb-2 -mt-10'>Connect with our friendly experts for personalized advice. We are always happy to help.</motion.p>
          <motion.p variants={textVariants} className="self-end text-base text-brand text-right font-secondary font-light tracking-wide w-10/12 md:text-lg">+2348026580836</motion.p>
        </div>
        <div className="flex flex-col justify-center max-w-xs">
          <motion.h2 variants={textVariants} className='flex items-center gap-2 text-white text-2xl font-secondary font-normal tracking-wide leading-[1.05] pb-12 md:font-medium'>
            <IoMailOutline className="text-brand" />Send an Email
          </motion.h2>
          <motion.p variants={textVariants} className='self-end text-gray-300 text-xs font-extralight indent-20 pl-2 w-10/12 pb-2 -mt-10'>Get started with personalized guidance! Schedule a free consultation by sending an email to us at</motion.p>
          <motion.a variants={textVariants} href="mailto:abdulyakeen2018@gmail.com" className="self-end">
            <p className="text-base text-brand text-right font-secondary font-light tracking-wide w-10/12 hover:underline md:text-lg">abdulyakeen2018@gmail.com</p>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
