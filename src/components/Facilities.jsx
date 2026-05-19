import { FaBus, FaBuilding, FaWater, FaFlask, FaBook, FaLaptopCode, FaUtensils, FaFutbol, FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    {
      icon: <FaBuilding className="w-10 h-10" />,
      name: "New Storey Building",
      description: "State-of-the-art 8-classroom storey building completed in 2025, accommodating 400+ students with modern amenities.",
      image: "public/images/storeybuidling.jpeg",
      year: "2025"
    },
    {
      icon: <FaBus className="w-10 h-10" />,
      name: "School Bus",
      description: "Modern 60-seater bus acquired in 2025, ensuring safe and reliable transportation for day scholars.",
      image: "public/images/monicabus 2026-05-19 at 1.14.55 AM (1).jpeg",
      year: "2025"
    },
    {
      icon: <FaWater className="w-10 h-10" />,
      name: "Borehole Project",
      description: "Successful borehole drilling providing clean and reliable water supply for the entire school community.",
      image: "public/images/boreholedrilling.jpeg",
      year: "2025"
    },
    {
      icon: <FaFlask className="w-10 h-10" />,
      name: "Science Laboratories",
      description: "Fully equipped Biology, Chemistry, and Physics laboratories for practical learning.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023"
    },
    {
      icon: <FaBook className="w-10 h-10" />,
      name: "Modern Library",
      description: "Well-stocked library with 15,000+ books, e-learning resources, and quiet study areas.",
      image: "public/images/library.avif",
      year: "2022"
    },
    {
      icon: <FaLaptopCode className="w-10 h-10" />,
      name: "Computer Lab",
      description: "Modern computer laboratory with 60+ computers, high-speed internet, and ICT certification programs.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2022"
    },
    {
      icon: <FaUtensils className="w-10 h-10" />,
      name: "School Kitchen",
      description: "Modern kitchen facility providing nutritious meals for students during school hours.",
      image: "public/images/kitchen.avif",
      year: "2020"
    },
    {
      icon: <FaFutbol className="w-10 h-10" />,
      name: "Sports Complex",
      description: "Standard football pitch, volleyball courts, basketball court, and athletics track.",
      image: "public/images/sportsboyz1.jpeg",
      year: "2021"
    },
    {
      icon: <FaChalkboardTeacher className="w-10 h-10" />,
      name: "Smart Classrooms",
      description: "Modern classrooms with teaching aids, proper ventilation, and comfortable learning environment.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024"
    },
    {
      icon: <FaShieldAlt className="w-10 h-10" />,
      name: "Security System",
      description: "24/7 security, CCTV cameras, and secure fencing for student safety.",
      image: "public/images/cctvsec.webp",
      year: "2023"
    }
  ];

  return (
    <section id="facilities" className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">School Facilities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Modern infrastructure and facilities supporting quality education for our day scholars
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Facility Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#800020] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {facility.year}
                </div>
              </div>
              
              {/* Facility Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#800020] text-3xl">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-[#800020]">{facility.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Summary Banner */}
        <div className="mt-12 bg-[#800020] text-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">10+</p>
              <p className="text-sm text-gray-200">Modern Facilities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">60+</p>
              <p className="text-sm text-gray-200">Computers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">15,000+</p>
              <p className="text-sm text-gray-200">Library Books</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">24/7</p>
              <p className="text-sm text-gray-200">Security & Water</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;