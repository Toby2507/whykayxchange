import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialCard } from '../components';
import { testimonials } from '../data';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className='grid grid-cols-1 pt-32 w-full lg:grid-cols-2 lg:gap-14 lg:pt-32' id='testimonials'>
      <div className="flex flex-col justify-center">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 70, damping: 8, duration: 1.5 }}
          className='self-start text-white text-lg font-secondary font-medium tracking-wider leading-[1.05] pb-12 uppercase md:text-3xl lg:text-2xl'
        >
          What our customers are saying<span className="text-brand">.</span>
        </motion.h2>
        <motion.p
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 70, damping: 8, duration: 1.5 }}
          className='self-end text-gray-300 text-xs font-extralight indent-20 pl-2 w-10/12 pb-12 -mt-10 md:w-8/12 md:text-sm lg:text-xs'
        >
          We are dedicated to providing top-notch services and user experience. Hear what our clients have to say. Real Stories. Real Satisfaction. Testimonials that speak volumes about our commitment to Excellence and Trustworthyness.
        </motion.p>
      </div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="text-white w-full pb-10"
        effect='cards'
        grabCursor={true}
        modules={[Pagination, EffectCards, Autoplay]}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={1}
        style={{
          '--swiper-pagination-color': '#EA603F',
          '--swiper-pagination-bullet-inactive-color': '#FFF',
          '--swiper-pagination-bullet-inactive-opacity': '.5'
        } as React.CSSProperties}
      >
        {testimonials.map((testimonials, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard {...testimonials} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;