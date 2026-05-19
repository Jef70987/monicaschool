import { FaMicrophone, FaMusic, FaCross, FaTheaterMasks, FaBook, FaLeaf, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';

const Clubs = () => {
  const clubs = [
    {
      icon: <FaTheaterMasks className="w-8 h-8" />,
      name: "Drama Club",
      description: "Award-winning drama team participating in Kenya Drama Festival. County champions 2023 & 2024.",
      image: "public/images/dramafest2.jpeg",
      achievements: "County Champions 2023, 2024 | Regional Best Actor Award",
      meetingDay: "Every Wednesday, 4:00 PM"
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      name: "Music & Choir",
      description: "School choir with national festival awards. Traditional music and choral verse specialists.",
      image: "public/images/musicfest1.jpeg",
      achievements: "First Place Traditional Music 2024 | Second Place Choral Verse 2025",
      meetingDay: "Every Tuesday & Friday, 4:00 PM"
    },
    {
      icon: <FaCross className="w-8 h-8" />,
      name: "Christian Union (CU)",
      description: "Spiritual growth and fellowship under Catholic guidance. Weekly prayers and community outreach.",
      image: "public/images/cu.jpeg",
      achievements: "Annual Retreat | Community Outreach Programs | Morning Devotions",
      meetingDay: "Every Monday & Thursday, 6:30 AM"
    },
    {
      icon: <FaMicrophone className="w-8 h-8" />,
      name: "Debate Club",
      description: "Developing public speaking and critical thinking skills through competitive debates.",
      image: "public/images/moniapic2dash.jpeg",
      achievements: "Regional Debate Quarter-finalists 2024 | Best Speaker Award",
      meetingDay: "Every Friday, 3:30 PM"
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      name: "Science Club",
      description: "Hands-on experiments, science fairs, and innovation challenges.",
      image: "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: "Science Congress Participants 2024 | Best Innovation Award",
      meetingDay: "Every Tuesday, 3:30 PM"
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      name: "Environmental Club",
      description: "Tree planting, waste management, and conservation initiatives.",
      image: "public/images/environmanety1.jpeg",
      achievements: "500+ Trees Planted | Cleanest School Award 2024",
      meetingDay: "Every Thursday, 3:30 PM"
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      name: "Charity Club",
      description: "Community outreach, visiting children's homes, and fundraising for the needy.",
      image: "public/images/charity.jpeg",
      achievements: "Monthly Outreach Programs | Supported 50+ Needy Students",
      meetingDay: "Every Saturday, 9:00 AM"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      name: "ICT Club",
      description: "Coding, robotics, graphic design, and digital skills development.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: "Website Development | Computer Boot Camp Participants",
      meetingDay: "Every Wednesday, 3:30 PM"
    }
  ];

  return (
    <section id="clubs" className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Clubs & Societies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Diverse co-curricular activities for holistic student development and talent nurturing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-full">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Club Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Club Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#800020] text-2xl">{club.icon}</div>
                  <h3 className="text-xl font-bold text-[#800020]">{club.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {club.description}
                </p>
                <div className="space-y-2 mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Achievements</p>
                    <p className="text-xs text-gray-600">{club.achievements}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Meeting Day</p>
                    <p className="text-xs text-[#800020] font-medium">{club.meetingDay}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Banner */}
        <div className="mt-12 bg-[#800020] text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Join Our Clubs</h3>
          <p className="text-gray-200 mb-4 max-w-2xl mx-auto">
            All students are encouraged to join at least one club for holistic development, talent nurturing, and leadership skills
          </p>
          {/* <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#FFFDD0] text-[#800020] px-6 py-2 rounded-md hover:bg-white transition-colors font-semibold">
              View Club Schedule
            </button>
            <button className="border-2 border-[#FFFDD0] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#800020] transition-colors font-semibold">
              Register for a Club
            </button>
          </div> */}
        </div>

        {/* Club Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow">
            <p className="text-2xl font-bold text-[#800020]">8</p>
            <p className="text-xs text-gray-500">Active Clubs</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow">
            <p className="text-2xl font-bold text-[#800020]">450+</p>
            <p className="text-xs text-gray-500">Club Members</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow">
            <p className="text-2xl font-bold text-[#800020]">12+</p>
            <p className="text-xs text-gray-500">Annual Events</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow">
            <p className="text-2xl font-bold text-[#800020]">15+</p>
            <p className="text-xs text-gray-500">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;