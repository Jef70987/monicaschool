/* eslint-disable no-unused-vars */
import { FaQuoteLeft, FaAward, FaUsers, FaHeart, FaChalkboardTeacher, FaBook, FaHandsHelping, FaEnvelope, FaPhone } from 'react-icons/fa';

const PrincipalPage = () => {
  return (
    <section id="principal" className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Principal's Page</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Image with curved right side */}
            <div className="lg:w-1/2 relative">
              <div className="bg-[#800020] h-full min-h-[500px] rounded-l-2xl overflow-hidden" style={{ borderRadius: '20px 0 0 20px' }}>
                <img 
                  src="/monicaprincipal.jpeg" 
                  alt="Mr. Peter Echesaa - Principal, St. Monicah High School"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Curved border on the right side of image */}
              <div className="absolute top-0 right-0 w-8 h-full overflow-hidden hidden lg:block">
                <div className="absolute left-0 w-8 h-full bg-[#800020] rounded-r-full"></div>
              </div>
            </div>
            
            {/* Right Column - Content with curved left border */}
            <div className="lg:w-1/2 bg-white rounded-r-2xl p-8 relative" style={{ borderRadius: '0 20px 20px 0' }}>
              {/* Curved border on the left side of content */}
              <div className="absolute top-0 left-0 w-8 h-full overflow-hidden hidden lg:block">
                <div className="absolute right-0 w-8 h-full bg-white rounded-l-full"></div>
              </div>
              
              <div className="pl-4">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-[#800020]">Mr. Peter Echesaa</h3>
                  <p className="text-lg text-gray-600 mt-1">Principal, St. Monicah High School Lubao</p>
                  <div className="w-20 h-1 bg-[#800020] mt-3"></div>
                </div>

                <div className="mb-6">
                  <FaQuoteLeft className="text-[#800020] text-3xl mb-3 opacity-50" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "Education is not just about academic excellence; it is about shaping character, nurturing talents, and building responsible citizens who will serve society with integrity and compassion."
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaChalkboardTeacher className="text-[#800020] text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-[#800020]">Educational Philosophy</p>
                      <p className="text-sm text-gray-600">Holistic education that balances academics, co-curricular activities, and spiritual growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FaHeart className="text-[#800020] text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-[#800020]">Vision for the School</p>
                      <p className="text-sm text-gray-600">To make St. Monicah High a center of academic excellence and moral formation in Lubao and beyond.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FaUsers className="text-[#800020] text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-[#800020]">Message to Students</p>
                      <p className="text-sm text-gray-600">Work hard, stay disciplined, and trust in God. Your future is bright.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-[#800020] text-sm" />
                      <span className="text-xs text-gray-600">principal@stmonicahlubao.ac.ke</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-[#800020] text-sm" />
                      <span className="text-xs text-gray-600">+254 712 345 678</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalPage;