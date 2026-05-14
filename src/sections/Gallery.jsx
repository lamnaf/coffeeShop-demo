import { motion } from 'framer-motion'
import { galleryImages } from '../data/gallery'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brown-200/50 text-brown-600 text-sm font-inter font-medium rounded-full mb-4">
            Our Ambience
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-brown-600/70 font-inter max-w-xl mx-auto text-base sm:text-lg">
            A glimpse into the warm and inviting atmosphere that makes Brew & Bean special.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer ${
                i === 0 || i === 3 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover min-h-[200px] sm:min-h-[250px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/30 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brown-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
