//links
import Link from 'next/link'

//icons
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiLinkedinLine, RiGithubLine, RiTwitterLine} from 'react-icons/ri'

const Socials = () => {
  return(
     <div className='flex items-center gap-x-5 text-xl'>
    <Link href={'https://www.linkedin.com/in/sana-afzal-a43085b1/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={'https://github.com/sanaafzal-cmd'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    
  </div>
  )
};

export default Socials;
