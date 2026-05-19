import { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 shadow-md'}`}>
            <div className="w-full px-4 md:px-8 lg:px-12">
                <div className="flex justify-between items-center py-3">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#800020] rounded-lg flex items-center justify-center">
                            <span className="text-[#FFFDD0] font-bold text-xl">SMH</span>
                        </div>
                        <div>
                            <h1 className="text-lg md:text-xl font-bold text-[#800020] leading-tight">St. Monicah High</h1>
                            <p className="text-xs text-gray-600">Lubao, Kenya | Mixed Day School</p>
                        </div>
                    </div>

                    {/* Navigation Component */}
                    <Navigation />

                    {/* CTA Button - Desktop */}
                    {/* <div className="hidden md:block">
                        <button className="bg-[#800020] text-white px-5 py-2 rounded-md hover:bg-[#600018] transition-colors font-semibold text-sm">
                            Apply Now
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;