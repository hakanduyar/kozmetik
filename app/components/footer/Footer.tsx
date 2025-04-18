import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white mt-3 md:mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Brand Name</h3>
          <p className="text-sm text-white/90">
            Premium products curated just for you. Experience the difference with our exceptional quality.
          </p>
          
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="hover:text-white/80 transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm hover:text-white/80 transition-colors">Home</Link></li> 
            <li><Link href="/products" className="text-sm hover:text-white/80 transition-colors">Products</Link></li>
            <li><Link href="/about" className="text-sm hover:text-white/80 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-white/80 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Categories</h3>
          <ul className="space-y-2">
            <li><Link href="/category/women" className="text-sm hover:text-white/80 transition-colors">Women</Link></li>
            <li><Link href="/category/men" className="text-sm hover:text-white/80 transition-colors">Men</Link></li>
            <li><Link href="/category/accessories" className="text-sm hover:text-white/80 transition-colors">Accessories</Link></li>
            <li><Link href="/category/new" className="text-sm hover:text-white/80 transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Stay Updated</h3>
          <p className="text-sm text-white/90">Join our newsletter for exclusive offers</p>
          
          <form className="flex flex-col sm:flex-row gap-2 mt-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-md text-pink-800 text-sm w-full focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-pink-500 px-4 py-2 rounded-md font-medium hover:bg-pink-100 transition-colors text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="w-full py-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Brand Name. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;