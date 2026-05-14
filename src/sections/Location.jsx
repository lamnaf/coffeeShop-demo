import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone, FiMail, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

const businessHours = [
  { day: 'Monday - Friday', hours: '07:00 - 21:00' },
  { day: 'Saturday', hours: '08:00 - 22:00' },
  { day: 'Sunday', hours: '09:00 - 20:00' },
]

const contactInfo = [
  {
    icon: FiMapPin,
    label: 'Address',
    value: 'Jl. Kopi Nikmat No. 123, Jakarta Selatan',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+62 812-3456-7890',
    href: 'tel:+6281234567890',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'hello@brewandbean.com',
    href: 'mailto:hello@brewandbean.com',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@brewandbean',
    href: 'https://instagram.com',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
  },
]

export default function Location() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="location" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brown-100 text-brown-600 text-sm font-inter font-medium rounded-full mb-4">
            Find Us
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-4">
            Visit Our Coffee Shop
          </h2>
          <p className="text-brown-600/70 font-inter max-w-xl mx-auto text-base sm:text-lg">
            We would love to welcome you. Come enjoy a cup of coffee in our cozy space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-cream rounded-2xl p-6 sm:p-8 shadow-sm border border-brown-100">
              <h3 className="font-poppins text-xl font-semibold text-brown-900 mb-4 flex items-center gap-2">
                <FiClock className="text-gold" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-brown-100 last:border-0"
                  >
                    <span className="font-inter text-brown-700 text-sm sm:text-base">{item.day}</span>
                    <span className="font-inter text-brown-900 font-medium text-sm sm:text-base">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 sm:p-8 shadow-sm border border-brown-100">
              <h3 className="font-poppins text-xl font-semibold text-brown-900 mb-4 flex items-center gap-2">
                <FiMapPin className="text-gold" />
                Contact & Location
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brown-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-brown-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-brown-500 text-xs font-inter uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brown-900 font-inter font-medium text-sm sm:text-base hover:text-brown-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brown-900 font-inter font-medium text-sm sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[400px] sm:h-[500px] lg:h-full rounded-2xl overflow-hidden shadow-lg border border-brown-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.294877056429!2d106.827153!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f539c09b0e2f%3A0x9b5e9c5e5b5e5b5e!2sJakarta!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew & Bean Coffee Shop Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
