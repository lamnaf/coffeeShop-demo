import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import { menuCategories } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
  const [ref, isVisible] = useScrollReveal()

  const activeMenu = menuCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brown-100 text-brown-600 text-sm font-inter font-medium rounded-full mb-4">
            Our Selection
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-4">
            Featured Menu
          </h2>
          <p className="text-brown-600/70 font-inter max-w-xl mx-auto text-base sm:text-lg">
            Handcrafted beverages and treats made with the finest ingredients, served with love.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-brown-800 text-cream shadow-lg'
                  : 'bg-brown-100 text-brown-600 hover:bg-brown-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {activeMenu?.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-brown-100 hover:border-brown-200 transition-all duration-500"
              >
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-brown-800 font-poppins font-semibold text-sm shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-poppins text-lg font-semibold text-brown-900 mb-2 group-hover:text-brown-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-brown-500 text-sm font-inter leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-gold text-sm font-inter font-medium group-hover:gap-2 transition-all duration-300">
                    Order Now <FiChevronRight className="ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
