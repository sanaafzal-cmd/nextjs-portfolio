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
        {/* Other head elements */}
        <title>Sana Afzal</title>
        <link rel="icon" href="/favicon.png" /> 
        {/* Adjust the path if necessary */}
       
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
