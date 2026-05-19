import { FaFlask, FaCalculator, FaBook, FaGlobe, FaLaptopCode, FaBuilding, FaChalkboardTeacher, FaPaintBrush, FaMusic } from 'react-icons/fa';

const Departments = () => {
  const departments = [
    {
      icon: <FaFlask className="w-10 h-10" />,
      name: "Sciences Department",
      motto: "Exploring God's Creation Through Science",
      head: "Mr. Peter Okoth",
      staff: 8,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern laboratories for Biology, Chemistry, and Physics with practical learning approach."
    },
    {
      icon: <FaCalculator className="w-10 h-10" />,
      name: "Mathematics Department",
      motto: "Numbers Define Our World",
      head: "Mr. James Mwangi",
      staff: 6,
      image: "https://images.pexels.com/photos/1635070041078-e363dbe005cb?auto=compress&cs=tinysrgb&w=800",
      description: "Developing analytical thinking and problem-solving skills through comprehensive curriculum."
    },
    {
      icon: <FaBook className="w-10 h-10" />,
      name: "Languages Department",
      motto: "Bridging Cultures Through Words",
      head: "Mrs. Rose Atieno",
      staff: 7,
      image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "English, Kiswahili, French, and German languages with literary excellence."
    },
    {
      icon: <FaGlobe className="w-10 h-10" />,
      name: "Humanities Department",
      motto: "Understanding Our World",
      head: "Mr. Francis Omondi",
      staff: 6,
      image: "https://images.pexels.com/photos/1447069387593-a5de0862481e?auto=compress&cs=tinysrgb&w=800",
      description: "History, Geography, CRE, and Business Studies for global citizenship."
    },
    {
      icon: <FaLaptopCode className="w-10 h-10" />,
      name: "Computer Studies",
      motto: "Digital Literacy for All",
      head: "Mr. Brian Omondi",
      staff: 4,
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern computer lab with 60+ computers and ICT certification programs."
    },
    {
      icon: <FaBuilding className="w-10 h-10" />,
      name: "Library Department",
      motto: "Knowledge Is Power",
      head: "Mrs. Elizabeth Atieno",
      staff: 3,
      image: "https://images.pexels.com/photos/159775/library-la-trobe-book-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Well-stocked library with 15,000+ books and e-learning resources."
    },
    {
      icon: <FaChalkboardTeacher className="w-10 h-10" />,
      name: "Technical Department",
      motto: "Skills for Life",
      head: "Mr. Charles Maina",
      staff: 5,
      image: "https://images.pexels.com/photos/1504917595217-d4dc5ebe6122?auto=compress&cs=tinysrgb&w=800",
      description: "Woodwork, Metalwork, and Drawing & Design for hands-on skills."
    },
    {
      icon: <FaPaintBrush className="w-10 h-10" />,
      name: "Creative Arts",
      motto: "Expressing Creativity",
      head: "Mr. Collins Otieno",
      staff: 4,
      image: "https://images.pexels.com/photos/1105959/pexels-photo-1105959.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Art, Drama, and Music for talent development and expression."
    },
    {
      icon: <FaMusic className="w-10 h-10" />,
      name: "Music Department",
      motto: "Harmony in Excellence",
      head: "Mrs. Grace Muthoni",
      staff: 3,
      image: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Award-winning choir and instrumental music program."
    }
  ];

  return (
    <section id="departments" className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Academic Departments</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Excellence through specialized instruction and dedicated staff across all departments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Department Image - Stationary/Equipment only */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Department Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#800020] text-2xl">{dept.icon}</div>
                  <h3 className="text-xl font-bold text-[#800020]">{dept.name}</h3>
                </div>
                <p className="text-sm text-gray-600 italic mb-3">"{dept.motto}"</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {dept.description}
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Department Head</p>
                    <p className="text-sm font-semibold text-[#800020]">{dept.head}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Staff Members</p>
                    <p className="text-sm font-semibold text-[#800020]">{dept.staff}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;