import { FaSchool, FaCalendarAlt, FaChurch, FaUsers, FaBus, FaBuilding, FaWater } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">About Our School</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12 w-full max-w-full">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-[#800020] mb-4">Legacy of Excellence Since 1985</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              St. Monicah High School Lubao is a public mixed day school located in Lubao, Kenya. Founded in 1985 and sponsored by the Catholic Church, the institution is renowned for academic excellence, drama festivals, and sports achievements.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With an enrollment of over 850 students, we are committed to providing quality education rooted in Catholic values. Our recent investments include a modern school bus, a borehole project ensuring clean water, and a new storey classroom building.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <FaSchool className="text-[#800020] text-2xl mb-2" />
                <p className="font-semibold">Public Mixed Day School</p>
                <p className="text-sm text-gray-600">Lubao, Kenya</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <FaUsers className="text-[#800020] text-2xl mb-2" />
                <p className="font-semibold">850+ Students</p>
                <p className="text-sm text-gray-600">Mixed Day School</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <FaCalendarAlt className="text-[#800020] text-2xl mb-2" />
                <p className="font-semibold">Founded 1985</p>
                <p className="text-sm text-gray-600">40 Years of Excellence</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <FaChurch className="text-[#800020] text-2xl mb-2" />
                <p className="font-semibold">Catholic Sponsored</p>
                <p className="text-sm text-gray-600">Strong Moral Values</p>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-[#800020] mb-3">School Information</h4>
              <div className="space-y-3">
                <div><span className="font-semibold">Official Name:</span> St. Monicah High School Lubao</div>
                <div><span className="font-semibold">Principal:</span> Mr Peter Echesaa</div>
                <div><span className="font-semibold">Postal Address:</span> P.O. Box 45-90118, Lubao, Kenya</div>
                <div><span className="font-semibold">Phone:</span> 0712345678</div>
                <div><span className="font-semibold">Email:</span> info@stmonicahlubao.ac.ke</div>
              </div>
            </div>
            
            <div className="bg-[#800020] text-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-3">Our Pillars</h4>
              <ul className="space-y-2">
                <li>✓ Academic Excellence & Innovation</li>
                <li>✓ Character Development & Discipline</li>
                <li>✓ Spiritual Growth (Catholic Values)</li>
                <li>✓ Drama, Music & Arts Excellence</li>
                <li>✓ Sports & Co-Curricular Achievements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Facilities Highlight */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <FaBus className="text-[#800020] text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-[#800020] text-lg mb-2">New School Bus</h4>
            <p className="text-sm text-gray-600">Modern 60-seater bus for student transportation</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <FaBuilding className="text-[#800020] text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-[#800020] text-lg mb-2">New Storey Building</h4>
            <p className="text-sm text-gray-600">State-of-the-art classroom block completed</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <FaWater className="text-[#800020] text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-[#800020] text-lg mb-2">Borehole Project</h4>
            <p className="text-sm text-gray-600">Clean water supply for the entire school</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;