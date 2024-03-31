import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '../Styles/Navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Movies', href: '/movies' },
  { name: 'Travel', href: '/travel' },
  { name: 'Songs', href: '/songs' },
  { name: 'Books', href: '/books' },
]

export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div className={`bg-${scrolled ? 'bg-slate-600' : 'bg-gray-950'}-300 `}
    initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{delay:1}}>
      <header className={`absolute inset-x-0 top-0 z-${scrolled ? '50' : 'auto'}`}>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Perspective</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="4em" viewBox="0 0 256 256">
            <defs>
              <linearGradient id="logosInk0" x1="38.264%" x2="58.004%" y1="9.702%" y2="40.206%">
                <stop offset="0%" stop-color="#db221a" />
                <stop offset="100%" stop-color="#9e020b" />
              </linearGradient>
              <linearGradient id="logosInk1" x1="0%" x2="59.127%" y1="58.373%" y2="44.552%">
                <stop offset="0%" stop-color="#87d152" />
                <stop offset="100%" stop-color="#5ca82c" />
              </linearGradient>
              <linearGradient id="logosInk2" x1="55.987%" x2="47.766%" y1="94.205%" y2="50%">
                <stop offset="0%" stop-color="#39be90" />
                <stop offset="100%" stop-color="#2c8a72" />
              </linearGradient>
            </defs>
            <path fill="url(#logosInk0)" d="m25.549 25.331l1.123 4.457l41.545 41.77L110.66 28.89l.344-3.559z" />
            <path fill="#f6b937" d="m68.131 67.84l-.663 2.595l23.206 96.788l39.524-39.523l-59.286-59.511z" />
            <path fill="#ffd500" d="m185.89 67.59l40.422-40.572l4.357-1.251v84.192l-3.458-.449z" />
            <path fill="#fff67d" d="m136.189 0l94.48 25.767l-42.29 41.854l-8.907 4.805l-80.85 20.64l-7.142-1.869L68.131 67.84z" />
            <path fill="#5acda5" d="m188.379 67.621l-3.387 1.616l-21.259 20.66l.48 1.89l-.63 2.751l22.457 89.828l1.902 3.139l.194 2.25l39.524 39.374l2.936 1.031L256 135.388z" />
            <path fill="url(#logosInk1)" d="M25.913 145.433v84.872l5.026-1.101l41.32-41.917l-43.341-40.948z" />
            <path fill="#afe682" d="m25.913 230.305l42.436-43.018l3.91-1.986l92.297-22.906l23.386 25.11l-1.041 2.4l-37.391 38.738l-3.504 1.436l-25.03 25.411z" />
            <path fill="#7dd769" d="m164.213 91.787l-3.362 1.891l-32.113 31.551l-.629 2.662l59.833 59.614z" />
            <path fill="#aadc50" d="m188.379 67.621l-60.27 60.27L91.48 91.197z" />
            <path fill="url(#logosInk2)" d="m146.088 230.16l41.854-42.655l42.654 42.655z" />
            <path fill="#dc4b1e" d="m0 120.248l68.349 67.039l3.236-1.761l20.773-18.078l-.789-3.235L68.131 67.84L25.549 25.331z" />
            <path fill="#aabe55" d="m68.349 187.287l59.76-59.396l36.395 36.249z" />
          </svg>
          </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="navlinks hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-lg font-normal leading-6 text-gray-900">
              {item.name}
            </Link>
            ))}
          </div>
          <div className=" navlinks hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="/login" className="text-lg font-normal leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Perspective</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="4em" viewBox="0 0 256 256">
            <defs>
              <linearGradient id="logosInk0" x1="38.264%" x2="58.004%" y1="9.702%" y2="40.206%">
                <stop offset="0%" stop-color="#db221a" />
                <stop offset="100%" stop-color="#9e020b" />
              </linearGradient>
              <linearGradient id="logosInk1" x1="0%" x2="59.127%" y1="58.373%" y2="44.552%">
                <stop offset="0%" stop-color="#87d152" />
                <stop offset="100%" stop-color="#5ca82c" />
              </linearGradient>
              <linearGradient id="logosInk2" x1="55.987%" x2="47.766%" y1="94.205%" y2="50%">
                <stop offset="0%" stop-color="#39be90" />
                <stop offset="100%" stop-color="#2c8a72" />
              </linearGradient>
            </defs>
            <path fill="url(#logosInk0)" d="m25.549 25.331l1.123 4.457l41.545 41.77L110.66 28.89l.344-3.559z" />
            <path fill="#f6b937" d="m68.131 67.84l-.663 2.595l23.206 96.788l39.524-39.523l-59.286-59.511z" />
            <path fill="#ffd500" d="m185.89 67.59l40.422-40.572l4.357-1.251v84.192l-3.458-.449z" />
            <path fill="#fff67d" d="m136.189 0l94.48 25.767l-42.29 41.854l-8.907 4.805l-80.85 20.64l-7.142-1.869L68.131 67.84z" />
            <path fill="#5acda5" d="m188.379 67.621l-3.387 1.616l-21.259 20.66l.48 1.89l-.63 2.751l22.457 89.828l1.902 3.139l.194 2.25l39.524 39.374l2.936 1.031L256 135.388z" />
            <path fill="url(#logosInk1)" d="M25.913 145.433v84.872l5.026-1.101l41.32-41.917l-43.341-40.948z" />
            <path fill="#afe682" d="m25.913 230.305l42.436-43.018l3.91-1.986l92.297-22.906l23.386 25.11l-1.041 2.4l-37.391 38.738l-3.504 1.436l-25.03 25.411z" />
            <path fill="#7dd769" d="m164.213 91.787l-3.362 1.891l-32.113 31.551l-.629 2.662l59.833 59.614z" />
            <path fill="#aadc50" d="m188.379 67.621l-60.27 60.27L91.48 91.197z" />
            <path fill="url(#logosInk2)" d="m146.088 230.16l41.854-42.655l42.654 42.655z" />
            <path fill="#dc4b1e" d="m0 120.248l68.349 67.039l3.236-1.761l20.773-18.078l-.789-3.235L68.131 67.84L25.549 25.331z" />
            <path fill="#aabe55" d="m68.349 187.287l59.76-59.396l36.395 36.249z" />
          </svg>
          </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="navlinks space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className=" navlinks py-6">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </motion.div>
  )
}
