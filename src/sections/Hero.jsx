import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop"
          alt="Coffee shop interior with warm ambience"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 via-brown-900/60 to-brown-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full">
        <div className="lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/80 text-sm font-inter font-medium mb-6 border border-cream/10">
              Premium Coffee Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where Every Cup
            <br />
            <span className="text-gold">Tells a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cream/70 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 font-inter leading-relaxed"
          >
            Discover the perfect blend of artisanal coffee, warm ambience, and genuine hospitality in the heart of the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-brown-900 font-inter font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Our Menu
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 border-2 border-cream/30 text-cream font-inter font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
            >
              <FiPlay className="group-hover:scale-110 transition-transform" />
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
