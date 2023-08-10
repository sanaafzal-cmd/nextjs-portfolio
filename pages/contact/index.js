import { useState } from 'react';
//components
import Circles from '/components/Circles'
import Bulb from '../../components/Bulb';
import FloatingWhatsAppIcon from "../../components/FloatingWhatsappIcon";


//icons
import {BsArrowRight} from 'react-icons/bs'

//framer
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };

    const response = await fetch('/api/submit-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setStatus(data.message);

    if (response.ok) {
      // Form submitted successfully, reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };
  return <div className='h-full bg-primary/30'>
    <FloatingWhatsAppIcon />
    <Circles />
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      <div className=''>
{/* text & form */}
<div className='flex flex-col w-full max-w-[700px]'></div>

{/* text */}
<motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>Let&apos;s <span className='text-accent'>
  connect.</span>
   </motion.h2>
   {/* form */}
   <motion.form onSubmit={handleSubmit} variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' action='' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
    {/* input group */}
    <div className='flex gap-x-6 w-full'>
<input type='text' placeholder='name' className='input'  id="name"
          value={name} onChange={(e) => setName(e.target.value)} required />
<input type='text' placeholder='email' className='input'  id="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          required />
    </div>
    <input type='text' placeholder='subject' className='input'  id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required />
    <textarea placeholder='message' className='textarea'  id="message"
          value={message} onChange={(e) => setMessage(e.target.value)}
          required></textarea>
    <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
      <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
      <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />

    </button>
    {status && <p>{status}</p>}
   </motion.form>
      </div>
      <div>

      </div>
      <Bulb />
    </div>
  
  </div>;
};

export default Contact;
