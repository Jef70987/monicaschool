const Footer = () => {
  return (
    <footer className="bg-[#800020] text-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* School Info with Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/images/logomonic.jpeg" 
                  alt="St. Monicah High School Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">St. Monicah High</h3>
            </div>
            <p className="text-gray-200 text-sm">"For Excellence God Guides"</p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">About Us</a></li>
              <li><a href="#academic-history" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Academic History</a></li>
              <li><a href="#principal" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Principal's Page</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Achievements</a></li>
              <li><a href="#departments" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Departments</a></li>
              <li><a href="#sports" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Sports</a></li>
              <li><a href="#clubs" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Clubs</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#FFFDD0] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>P.O. Box 45-90118</li>
              <li>Lubao, Kenya</li>
              <li>+254 712 345 678</li>
              <li>+254 723 456 789</li>
              <li>info@stmonicahlubao.ac.ke</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-sm text-gray-300">Lubao, Kakamega County</p>
            <p className="text-sm text-gray-300 mt-2">Kenya</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-sm">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} St. Monicah High School Lubao. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Website managed by <a href="https://syntelsafe.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFDD0] hover:underline">SyntelSafe</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
