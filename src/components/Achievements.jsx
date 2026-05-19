/* eslint-disable no-unused-vars */
import { FaTrophy, FaMusic, FaTheaterMasks, FaFutbol, FaGraduationCap, FaBus, FaBuilding, FaWater } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaGraduationCap className="w-10 h-10" />,
      title: "Academic Excellence",
      description: "Mean score improved from 7.8 to 9.2 in 5 years. 88.6% university qualification rate in 2025 KCSE.",
      image: "/images/academicpic1.jpeg",
      year: "2025"
    },
    {
      icon: <FaTheaterMasks className="w-10 h-10" />,
      title: "Drama Festival Champions",
      description: "County champions 2023 & 2024. Best actor award at regional level. Qualified for national festival.",
      image: "/images/dramafest2.jpeg",
      year: "2024"
    },
    {
      icon: <FaMusic className="w-10 h-10" />,
      title: "Music Festival Awards",
      description: "First place in traditional music category 2024. Second place in choral verse 2025.",
      image: "/images/musicfest1.jpeg",
      year: "2025"
    },
    {
      icon: <FaFutbol className="w-10 h-10" />,
      title: "Sports Achievements",
      description: "KSSSA regional football champions 2024. Volleyball county champions 2025.",
      image: "/images/sportsboyz1.jpeg",
      year: "2025"
    },
    {
      icon: <FaBus className="w-10 h-10" />,
      title: "New School Bus",
      description: "Modern 60-seater bus acquired in 2025, improving student transportation safety and efficiency.",
      image: "/images/monicabus 2026-05-19 at 1.14.55 AM (1).jpeg",
      year: "2025"
    },
    {
      icon: <FaBuilding className="w-10 h-10" />,
      title: "New Storey Building",
      description: "State-of-the-art 8-classroom storey building completed in 2025, accommodating 300+ students.",
      image: "/images/storeybuidling.jpeg",
      year: "2025"
    },
    {
      icon: <FaWater className="w-10 h-10" />,
      title: "Borehole Drilling",
      description: "Successful borehole drilling completed in 2025, providing clean and reliable water supply for the entire school community.",
      image: "/images/boreholedrilling.jpeg",
      year: "2025"
    }
  ];

  return (
    <section id="achievements" className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Our Achievements</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Celebrating our milestones in academics, arts, sports, and infrastructure development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Achievement Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#800020] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {achievement.year}
                </div>
              </div>
              
              {/* Achievement Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#800020] text-2xl">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-[#800020]">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 bg-[#800020] text-white rounded-lg shadow-lg p-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">2024-2025</p>
              <p className="text-sm text-gray-200">Most Successful Period</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">7+</p>
              <p className="text-sm text-gray-200">Major Achievements</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">#1</p>
              <p className="text-sm text-gray-200">in Lubao Sub-County</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FFFDD0]">100%</p>
              <p className="text-sm text-gray-200">Water Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;