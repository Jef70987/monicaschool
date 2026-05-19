import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Get in touch with us for any inquiries, admissions, or feedback
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#800020] mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020]" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020]" />
                </div>
              </div>
              <div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020]" />
              </div>
              <div>
                <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020]"></textarea>
              </div>
              <button className="w-full bg-[#800020] text-white py-3 rounded-md hover:bg-[#600018] transition-colors font-semibold">
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">
              This is a static form. For urgent matters, please call us directly.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-[#800020] text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-200 text-sm">Lubao, Kakamega County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-gray-200 text-sm">+254 712 345 678 / +254 723 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-200 text-sm">info@stmonicahlubao.ac.ke</p>
                    <p className="text-gray-200 text-sm">principal@stmonicahlubao.ac.ke</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-200 text-sm">Monday - Friday: 7:30 AM - 4:30 PM</p>
                    <p className="text-gray-200 text-sm">Saturday: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold text-[#800020] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-[#800020] text-white p-3 rounded-full hover:bg-[#600018] transition-colors">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="bg-[#800020] text-white p-3 rounded-full hover:bg-[#600018] transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="bg-[#800020] text-white p-3 rounded-full hover:bg-[#600018] transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="bg-[#800020] text-white p-3 rounded-full hover:bg-[#600018] transition-colors">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            {/* Postal Address */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h4 className="font-bold text-[#800020] mb-2">Postal Address</h4>
              <p className="text-gray-600 text-sm">P.O. Box 45-90118, Lubao, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;