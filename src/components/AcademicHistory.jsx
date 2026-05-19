/* eslint-disable no-unused-vars */
import { FaChartLine, FaGraduationCap, FaBookOpen, FaCalendarCheck, FaUsers, FaArrowUp } from 'react-icons/fa';

const AcademicHistory = () => {
  const historyData = [
    {
      year: "2025",
      title: "Best KCSE Performance Ever",
      description: "Achieved mean score of 9.2 (B+), the highest in school history. 155 out of 175 students qualified for university direct entry (88.6% qualification rate)."
    },
    {
      year: "2024",
      title: "Record University Admissions",
      description: "140 out of 165 students qualified for university direct entry (85% qualification rate)."
    },
    {
      year: "2023",
      title: "First Grade A Student",
      description: "First student in school history achieved Grade A in KCSE, scoring 81 points."
    },
    {
      year: "2022",
      title: "Digital Learning Integration",
      description: "Full implementation of digital learning with 60 computers and e-learning resources."
    },
    {
      year: "2021",
      title: "Post-COVID Academic Recovery",
      description: "Successfully navigated learning disruptions with mean score of 7.8 (B)."
    }
  ];

  const examResults = [
    { year: "2025", meanScore: "9.2", grade: "B+", candidates: 175, universityQualified: 155 },
    { year: "2024", meanScore: "8.8", grade: "B+", candidates: 165, universityQualified: 140 },
    { year: "2023", meanScore: "8.5", grade: "B+", candidates: 156, universityQualified: 128 },
    { year: "2022", meanScore: "8.1", grade: "B+", candidates: 148, universityQualified: 112 },
    { year: "2021", meanScore: "7.8", grade: "B", candidates: 135, universityQualified: 95 }
  ];

  return (
    <section id="academic-history" className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Academic History</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Recent academic milestones and KCSE performance (2021-2025)
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline - Recent Years First */}
          <div>
            <h3 className="text-2xl font-bold text-[#800020] mb-6 flex items-center gap-2">
              <FaCalendarCheck className="text-[#800020]" />
              Recent Academic Milestones (2021-2025)
            </h3>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
              {historyData.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-[#800020] pb-6 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#800020] rounded-full"></div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <span className="inline-block bg-[#800020] text-white text-xs font-bold px-2 py-1 rounded mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-[#800020] mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Results */}
          <div>
            <h3 className="text-2xl font-bold text-[#800020] mb-6 flex items-center gap-2">
              <FaChartLine className="text-[#800020]" />
              KCSE Performance Trend (2021-2025)
            </h3>
            
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#800020] text-white">
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-left">Mean Score</th>
                      <th className="p-3 text-left">Grade</th>
                      <th className="p-3 text-left">Candidates</th>
                      <th className="p-3 text-left">Univ. Qualified</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examResults.map((result, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="p-3 font-semibold">{result.year}</td>
                        <td className="p-3 font-bold text-[#800020]">{result.meanScore}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            result.meanScore >= 9.0 ? 'bg-green-100 text-green-800' : 
                            result.meanScore >= 8.5 ? 'bg-green-100 text-green-800' : 
                            result.meanScore >= 8.0 ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {result.grade}
                          </span>
                        </td>
                        <td className="p-3">{result.candidates}</td>
                        <td className="p-3">{result.universityQualified}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="bg-[#800020] text-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaArrowUp className="text-[#FFFDD0]" />
                Performance Summary (2021-2025)
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FFFDD0]">+1.4</p>
                  <p className="text-sm text-gray-200">Mean Score Improvement</p>
                  <p className="text-xs text-gray-300">(7.8 to 9.2)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FFFDD0]">+63%</p>
                  <p className="text-sm text-gray-200">University Qualification</p>
                  <p className="text-xs text-gray-300">(95 to 155 students)</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4 mt-2">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-[#FFFDD0] text-2xl" />
                  <div>
                    <p className="font-semibold">2025 Notable Achievement</p>
                    <p className="text-sm text-gray-200">88.6% university direct entry qualification rate (Highest in school history)</p>
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

export default AcademicHistory;