import { motion } from 'framer-motion'
import { FiCoffee, FiHeart, FiStar } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { icon: FiCoffee, value: '50+', label: 'Coffee Variants' },
  { icon: FiHeart, value: '5K+', label: 'Happy Customers' },
  { icon: FiStar, value: '4.9', label: 'Average Rating' },
]

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&h=800&fit=crop"
                alt="Cozy coffee shop interior with warm wooden tones and barista at work"
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-brown-300/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-brown-200/50 text-brown-700 text-sm font-inter font-medium rounded-full">
              Our Story
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 leading-tight">
              More Than Just
              <br />
              <span className="text-brown-600">Great Coffee</span>
            </h2>
            <p className="text-brown-700/70 font-inter leading-relaxed text-base sm:text-lg">
              Brew & Bean was born from a simple belief — that great coffee has the power to bring people together. 
              Founded in 2020, we set out to create a space where every detail, from bean to brew, reflects our 
              passion for quality and community.
            </p>
            <p className="text-brown-700/60 font-inter leading-relaxed text-sm sm:text-base">
              Nestled in a cozy corner of the city, our coffee shop is designed to be your home away from home. 
              Whether you are catching up with friends, diving into a good book, or getting work done, our warm 
              ambience and handcrafted beverages make every visit special.
            </p>
            <div className="pt-4 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                  <stat.icon className="mx-auto text-gold text-xl sm:text-2xl mb-1.5" />
                  <div className="font-poppins text-xl sm:text-2xl font-bold text-brown-900">{stat.value}</div>
                  <div className="text-brown-500 text-xs sm:text-sm font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
