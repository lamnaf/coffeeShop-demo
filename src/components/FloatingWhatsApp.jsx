import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Hi%20Brew%20%26%20Bean!%20I%20have%20a%20question."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-30" />
    </a>
  )
}
