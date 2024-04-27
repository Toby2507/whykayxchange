import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

interface ITestimonial {
  name: string;
  message: string;
}

const TestimonialCard = ({ name, message }: ITestimonial) => {
  return (
    <div className="flex flex-col justify-center gap-6 px-4 py-6 bg-cardBg border border-cardBorder rounded-xl min-h-80 mx-auto w-10/12 md:px-14 md:gap-14 md:min-h-96 lg:w-full">
      <div className="flex items-center gap-4 justify-between md:gap-8">
        <FaQuoteLeft className='text-3xl text-brand md:text-6xl' />
        <p className='flex-1 text-white/60 text-xs font-light mx-auto md:text-base'>{message}</p>
        <FaQuoteRight className='text-3xl text-brand md:text-6xl' />
      </div>
      <h4 className='text-2xl text-white text-right tracking-tighter font-secondary capitalize md:3xl'>{name}</h4>
    </div>
  );
};

export default TestimonialCard;