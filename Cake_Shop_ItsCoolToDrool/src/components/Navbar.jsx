import { useState } from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'Our Cakes', href: '#cakes' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="bg-teal-500 shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src={logoHorizontal} alt="It's Cool to Drool logo" className=" object-contain" height={475} width={475}/>
                        </div>
                    
                        {/* Desktop Menu */}
                        <div className="flex flex-row items-center justify-between gap-20">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-pink-100 px-2 py-1 text-base font-medium transition-all duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="flex flex-row items-center justify-between">
                            <button className="bg-rose-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:bg-rose-500 transition-all duration-300 border-2 border-rose-300">
                                Place Order
                            </button>
                        </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-500 focus:outline-none transition-all duration-200"
                            aria-expanded="false"
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-64' : 'max-h-0'
                }`}
            >
                <div className="px-4 pt-3 pb-4 space-y-2 sm:px-6 bg-teal-600">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white block px-4 py-3 rounded-lg text-base font-medium hover:bg-teal-700 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="w-full mt-4 bg-rose-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:bg-rose-500 transition-all duration-300">
                        Place Order
                    </button>
                </div>
            </div>
        </nav>

        {/* Brown divider line */}
        <div className="h-2 bg-gradient-to-r from-rose-400 to-rose-200"></div>
        </>
    );
}

export default Navbar;