const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.5) 100%), url('/monicadash4.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/30 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          

          {/* Main Title with Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            St. Monicah High
            <span className="block text-[#FFFDD0] text-3xl md:text-4xl lg:text-5xl mt-2">School Lubao</span>
          </h1>
          
          {/* Decorative Line */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-16 h-1 bg-[#FFFDD0] rounded-full"></div>
            <div className="w-8 h-1 bg-[#800020] rounded-full"></div>
            <div className="w-16 h-1 bg-[#FFFDD0] rounded-full"></div>
          </div>

          {/* Motto */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white/95">
              "Excellence Through Faith and Diligence"
            </p>
          </div>

          {/* Description Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-sm font-semibold text-[#FFFDD0]">Catholic Sponsored</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-sm font-semibold text-[#FFFDD0]">Mixed Day School</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-sm font-semibold text-[#FFFDD0]">850+ Students</p>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group relative px-8 py-4 bg-[#800020] rounded-lg font-semibold text-white hover:bg-[#600018] transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold text-white hover:bg-white hover:text-[#800020] transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Explore Campus</span>
            </button>
          </div> */}

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">40+</p>
              <p className="text-xs text-white/80">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">30+</p>
              <p className="text-xs text-white/80">Qualified Teachers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">10+</p>
              <p className="text-xs text-white/80">Modern Facilities</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">15+</p>
              <p className="text-xs text-white/80">Clubs & Sports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;