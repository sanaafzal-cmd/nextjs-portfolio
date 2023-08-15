
//icons
import {RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight} from 'react-icons/rx'
//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//import required modules
import SwiperCore,  {Navigation,  Pagination} from 'swiper'
// Initialize SwiperCore
SwiperCore.use([ Navigation,Pagination]);

//icons
import {FaQuoteLeft} from 'react-icons/fa'
//next image
import Image from 'next/image'

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Jackie Whetzel',
    position: 'Customer',
    message:
      '"Sana was incredibly professional and creative during the entire process. She did an amazing job building a custom website for my freelance writing business. She was highly responsive, quick to correct any changes I wanted and went above and beyond building this from scratch. I would give her a 5 out of 5 rating and will most definitely hire her again!! Highly recommend!!!"',
  },
  {
    image: '/t-avt-2.png',
    name: 'Fahad Rasool',
    position: 'Customer',
    message:
      '"Sana is very talented and skilled. She does lot of improvisations, she is creative and innovative. Other freelancers can learn a lot from her."',
  },
  {
    image: '/t-avt-3.png',
    name: 'Malik',
    position: 'Customer',
    message:
      'Very good job on the service. I am very satisfied with the overall services and will definitely use again in the near future. Thank you! 5 stars!',
  },
];

const TestimonialSlider = () => {
  return <Swiper 
  navigation={true}
  pagination={{
  
    clickable: true
  }}
  modules={{Navigation, Pagination}}
  className='h-[450px] xl:h-[360px]'
  >
    {
      testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* avatar */}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={80} height={80} alt='' />
                </div>
                {/* name */}
                <div className='text-lg'>{person.name}</div>
                {/* position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>
            {/* quote & message */}
            <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              {/* quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              {/* message */}
              <div className='text-sm xl:text-lg text-center md:text-left'>
                {person.message}
              </div>


            </div>
          </div>

          </SwiperSlide>
        )
      })
    }
  </Swiper>;
};

export default TestimonialSlider;

