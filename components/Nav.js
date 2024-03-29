//  links
import {HiHome, HiUser, HiRectangleGroup, HiViewColumns, HiChatBubbleBottomCenterText, HiEnvelope} from 'react-icons/hi2'
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'Work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'Testimonial',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

//next link
import Link from 'next/link'
import useMedia from 'use-media';


//next router
import {useRouter} from 'next/router'
const Nav = () => {
  
  const styles = {
    fontSize : '10px',
  }
  const router = useRouter();
  const pathname = router.pathname;
  return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    {/* inner */}
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link, index) =>{
        return <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent tranistion-all duration-300`} href={link.path} key={index}
        >

          {/* Tool tip */}
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
              
              <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}
              </div> 
            
            {/* triangle */}
            <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 '></div>

            </div>
          </div>

{/* Icons */}
          <div className='flex flex-col justify-center items-center'>
          {link.icon}
          <div style={styles} className='hidden lg:hidden sm:block'>
          {link.name}
          </div>
          </div>
          </Link>

      })}
    </div>
  </nav>;
};

export default Nav;
