//next image

import Image from 'next/image'
import Link from 'next/link'

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import FloatingWhatsAppIcon from '../components/FloatingWhatsAppIcon';

//framer motion
import {motion} from 'framer-motion';
import {BsArrowRight} from 'react-icons/bs'

//variants
import {fadeIn} from '../variants'

const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
     <FloatingWhatsAppIcon />
    
    {/* text */}
    
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>

        
         {/* Subtitle */}
         <motion.p variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'  className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-xl'>
          Hi, I am <span className='text-accent font-bold'>Sana Afzal</span>
        </motion.p>
        
        {/* title */}
       

         <motion.h1 variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'  className='h1'>UI UX <span className='text-accent'>Designer</span> <br />
         </motion.h1> 

         <motion.h1 variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'  className='h1'>Front End <span className='text-accent'>Web Developer</span> <br />
         </motion.h1>

<motion.p variants={fadeIn('down', 0.1)}
        initial='hidden'
        animate='show'
        exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-xl'>I bring designs to Life !</motion.p>

        {/* button */}
        <div className='flex justify-center xl:hidden relative'>
        <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
          <ProjectsBtn />
        </motion.div>
       
      
      </div>
    </div>
{/* Image */}
<div className='w-[1220px] h-full absolute right-0 bottom-0'>
{/* bg img */}
    <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'> </div>
    {/* particles */}
    <ParticlesContainer />
   
    {/* avatar img */}
    <motion.div variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration:1, ease: 'easeInOut'}}
       className='border-solid rounded-full w-full h-full max-w-[400px] max-h-[400px] absolute lg:bottom-20 lg:right-[15%]'>
    
     
    </motion.div>
   
    </div>
    
  </div>
  )
};

export default Home;
