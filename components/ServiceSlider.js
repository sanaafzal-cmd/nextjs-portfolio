//icons
import {RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight} from 'react-icons/rx'
//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//import required modules
import SwiperCore,  {FreeMode, Pagination} from 'swiper'
// Initialize SwiperCore
SwiperCore.use([FreeMode, Pagination]);

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Website Design',
    description: 'Stunning UI/UX Designs for your next business.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Web Development',
    description: 'Code UI/UX Designs into stunning websites.',
  },
  {
    icon: <RxDesktop />,
    title: 'WordPress',
    description: 'User-friendly CMS to easily edit your websites.',
  },
  {
    icon: <RxReader />,
    title: 'Ecommerce',
    description: 'Online storefront and shopping cart integration into your website.',
  },
  {
    icon: <RxRocket />,
    title: 'Responsive Design',
    description: 'Website fluidly resizes for optimal viewing.',
  },
];


const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640:{
      slidesPerView: 3,
      spaceBetween: 15
    },

  }}
  freeMode={true}
  pagination={{
  
    clickable: true
  }}
  modules={{FreeMode, Pagination}}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icons */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
             
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>

            </div>

          </SwiperSlide>
        )
      })
    }
  </Swiper>;
};

export default ServiceSlider;
