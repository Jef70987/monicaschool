const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image - Lighter Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/monicadash4.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
            St. Monicah High School Lubao
          </h1>
          
          {/* Decorative Line */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-20 h-1 bg-[#FFFDD0] rounded-full"></div>
          </div>

          {/* Motto */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white">
              "Excellence Through Faith and Diligence"
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg md:text-xl text-white">
              Catholic Sponsored • Mixed Day School • Excellence in Academics, Drama & Sports
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-white/30">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">40+</p>
              <p className="text-sm text-white">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">850+</p>
              <p className="text-sm text-white">Students</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">1985</p>
              <p className="text-sm text-white">Year Founded</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#FFFDD0]">15+</p>
              <p className="text-sm text-white">Clubs & Sports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;