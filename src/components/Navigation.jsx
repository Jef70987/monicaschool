/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const Navlinks = [
        {
            title: "Home",
            Link: "/Home",
            sectionId: "home"
        },
        {
            title: "About Us",
            Link: "/About",
            sectionId: "about"
        },
        {
            title: "Academic History",
            Link: "/AcademicHistory",
            sectionId: "academic-history"
        },
        {
            title: "Principal's Page",
            Link: "/Principal",
            sectionId: "principal"
        },
        {
            title: "Achievements",
            Link: "/Achievements",
            sectionId: "achievements"
        },
        {
            title: "Departments",
            Link: "/Departments",
            sectionId: "departments"
        },
        {
            title: "Sports",
            Link: "/Sports",
            sectionId: "sports"
        },
        {
            title: "Clubs",
            Link: "/Clubs",
            sectionId: "clubs"
        },
        {
            title: "Facilities",
            Link: "/Facilities",
            sectionId: "facilities"
        },
        {
            title: "Gallery",
            Link: "/Gallery",
            sectionId: "gallery"
        },
        {
            title: "Contact",
            Link: "/Contact",
            sectionId: "contact"
        },
    ];

    const handleLinkClick = (e, item) => {
        e.preventDefault();
        setIsOpen(false);
        
        if (isMobile) {
            // On mobile: scroll to section
            const element = document.getElementById(item.sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update URL without reload
                navigate(item.Link, { replace: true });
            } else {
                // Fallback if element not found
                navigate(item.Link);
            }
        } else {
            // On desktop: normal navigation
            navigate(item.Link);
        }
    };

    return (
        <div className="relative">
            {/* Hamburger Menu Button - Mobile only */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col items-center justify-center w-10 h-10 rounded-lg text-[#800020] hover:text-[#600018] focus:outline-none lg:hidden"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Dropdown Menu - Fixed positioning */}
            {isOpen && (
                <div className="fixed top-16 left-0 right-0 mt-0 bg-white border-t border-gray-200 shadow-xl z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <div className="flex flex-col py-2">
                        {Navlinks.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.Link}
                                onClick={(e) => handleLinkClick(e, item)}
                                className="text-gray-700 hover:text-[#800020] hover:bg-gray-50 text-base font-medium transition-colors duration-200 px-6 py-4 cursor-pointer border-b border-gray-100 last:border-0"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation - Always visible */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-6">
                {Navlinks.map((item, index) => (
                    <a 
                        key={index} 
                        href={item.Link}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(item.Link);
                        }}
                        className="text-gray-700 hover:text-[#800020] text-sm lg:text-base font-medium transition-colors duration-200 cursor-pointer"
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navigation;