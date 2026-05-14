import { FiCoffee } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const footerLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Location', href: '#location' },
]

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/6281234567890', label: 'WhatsApp' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'Youtube' },
  { icon: HiOutlineMail, href: 'mailto:hello@brewandbean.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 group mb-4">
              <FiCoffee className="text-gold text-xl group-hover:rotate-12 transition-transform" />
              <span className="font-poppins text-xl font-semibold text-cream">
                Brew & Bean
              </span>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Where every cup tells a story. Experience the perfect blend of premium coffee, cozy ambience, and warm hospitality.
            </p>
          </div>

          <div>
            <h4 className="font-poppins text-sm font-semibold text-cream mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-sm font-semibold text-cream mb-4 uppercase tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li>Jl. Kopi Nikmat No. 123</li>
              <li>Jakarta Selatan</li>
              <li>Indonesia 12345</li>
              <li className="pt-2">
                <a href="tel:+6281234567890" className="hover:text-gold transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <a href="mailto:hello@brewandbean.com" className="hover:text-gold transition-colors">
                  hello@brewandbean.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-sm font-semibold text-cream mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-brown-700/50 text-cream/70 hover:bg-gold hover:text-brown-900 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brown-700/50 text-center text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} Brew & Bean Coffee Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
