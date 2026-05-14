import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { testimonials } from '../data/testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, isVisible] = useScrollReveal()

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-brown-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cream/10 text-cream/70 text-sm font-inter font-medium rounded-full border border-cream/10 mb-4">
            Testimonials
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            What Our Customers Say
          </h2>
          <p className="text-cream/50 font-inter max-w-xl mx-auto text-base sm:text-lg">
            Real words from real people who have experienced the Brew & Bean difference.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-cream/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-cream/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      size={18}
                      className={i < testimonials[current].rating ? 'text-gold fill-gold' : 'text-cream/20'}
                    />
                  ))}
                </div>
                <p className="text-cream/80 font-inter text-base sm:text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/30"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-poppins text-cream font-semibold text-sm sm:text-base">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-cream/50 text-xs sm:text-sm font-inter">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-cream/20 hover:bg-cream/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
