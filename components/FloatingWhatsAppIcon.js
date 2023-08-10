import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '923035268397'; // Replace this with your business WhatsApp phone number
    const message = 'Hello, I am interested in your services!'; // Customize the default pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='z-50'
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // Customize the background color
        borderRadius: '50%',
        padding: '12px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
         // Optional shadow effect
      }}
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp size={30} color="#FFFFFF" /> {/* Customize the icon size and color */}
    </div>
  );
};

export default FloatingWhatsAppIcon;
