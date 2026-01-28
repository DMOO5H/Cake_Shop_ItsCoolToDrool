import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'Our Cakes', href: '#cakes' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="bg-teal-400 shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo/Brand with styled text */}
                                    <div className="flex-shrink-0 flex items-center">
                                        <img src={new URL('../assets/logo-horizontal.png', import.meta.url).href} alt="logo" className="h-10 md:h-12 object-contain" />
                                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-white px-3 py-2 text-base font-medium transition-all duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-rose-400 text-white px-6 py-2 rounded font-semibold hover:shadow-lg hover:bg-rose-500 transition-all duration-200 border-2 border-white">
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
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-teal-500">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="w-full mt-3 bg-rose-400 text-white px-6 py-2 rounded font-semibold hover:shadow-lg hover:bg-rose-500 transition-all duration-200">
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