import { FaFutbol, FaBasketballBall, FaTableTennis, FaRunning, FaMedal, FaTrophy } from 'react-icons/fa';

const Sports = () => {
  const sports = [
    {
      icon: <FaFutbol className="w-8 h-8" />,
      name: "Football (Soccer)",
      category: "Ball Games",
      teams: "Boys & Girls Teams",
      image: "public/images/sportsgirls1.jpeg",
      achievements: "KSSSA Regional Champions 2024"
    },
    {
      icon: <FaBasketballBall className="w-8 h-8" />,
      name: "Netball",
      category: "Ball Games",
      teams: "Girls Team",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: "Regional Quarter-finalists 2024"
    },
    
    {
      icon: <FaTableTennis className="w-8 h-8" />,
      name: "Table Tennis",
      category: "Indoor Games",
      teams: "Co-ed",
      image: "https://images.pexels.com/photos/259147/pexels-photo-259147.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: "County Champions 2025"
    }
  ];

  const facilities = [
    "Standard Football Pitch",
  
    "Netball/Basketball Court",
    
    "Table Tennis Hall",
    "Changing Rooms & Equipment Store"
  ];

  return (
    <section id="sports" className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Sports Excellence</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Active participation in KSSSA competitions with outstanding achievements
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Sports Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sports.map((sport, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={sport.image} 
                    alt={sport.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[#800020] text-xl">{sport.icon}</div>
                    <h3 className="text-lg font-bold text-[#800020]">{sport.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{sport.category}</p>
                  <p className="text-sm font-semibold text-gray-700">{sport.teams}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <FaTrophy className="text-yellow-500 text-xs" />
                    <p className="text-xs text-gray-600">{sport.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Facilities and Achievements */}
          <div>
            {/* Sports Facilities */}
            <div className="bg-[#800020] text-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaRunning className="text-[#FFFDD0]" />
                Sports Facilities
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded transition-colors">
                    <span className="text-[#FFFDD0] font-bold">✓</span>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Achievements */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#800020] mb-4 flex items-center gap-2">
                <FaMedal className="text-[#800020]" />
                Overall Sports Achievements
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-[#800020] pl-3">
                  <p className="font-semibold text-[#800020]">KSSSA Western Region</p>
                  <p className="text-sm text-gray-600">Football Champions 2024</p>
                </div>
                <div className="border-l-4 border-[#800020] pl-3">
                  <p className="font-semibold text-[#800020]">County Athletics Championship</p>
                  <p className="text-sm text-gray-600">Overall Winners 2024 & 2025</p>
                </div>
                <div className="border-l-4 border-[#800020] pl-3">
                  <p className="font-semibold text-[#800020]">Table Tennis</p>
                  <p className="text-sm text-gray-600">County Champions 2025</p>
                </div>
              </div>
            </div>

            {/* Participation Stats */}
            <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-[#800020]">150+</p>
                  <p className="text-xs text-gray-500">Student Athletes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#800020]">5</p>
                  <p className="text-xs text-gray-500">Sports Disciplines</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#800020]">12</p>
                  <p className="text-xs text-gray-500">Coaching Staff</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#800020]">8</p>
                  <p className="text-xs text-gray-500">Trophies (2024-25)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;