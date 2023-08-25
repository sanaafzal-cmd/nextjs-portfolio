import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition'

//router
import {useRouter} from 'next/router';
import Head from 'next/head';

//framer motion
import {AnimatePresence, motion} from 'framer-motion'



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return(
    <Layout>
       <Head>
        <title>Sana Afzal - Web Developer</title>
        <link rel="icon" href="/favicon.png" /> 
        <meta property="og:image" content="/profile-pic.png" />
  <meta property="og:image:secure_url" content="/profile-pic.png" />
  <meta property="og:image:width" content="973" />
  <meta property="og:image:height" content="973" />
  
       
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
        
        <Component {...pageProps} />
        </motion.div>
        
      
      </AnimatePresence>
    </Layout>
      
  
    
   
  
  )
  
}

export default MyApp;
