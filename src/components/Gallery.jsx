import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate image array from picG1 to picG15
  const images = Array.from({ length: 29 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    image: `/public/gallery/picG${i + 1}.jpeg`
  }));

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-20">
        <h2 className="section-title text-center">Our Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our school facilities, events, and vibrant school life
        </p>

        {/* Main Carousel */}
        <div className="relative w-full max-w-6xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative h-[500px] md:h-[600px] cursor-pointer" onClick={() => openModal(item)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                        <p className="text-sm text-gray-200">Click to enlarge</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Auto-play Button */}
            <button
              onClick={toggleAutoPlay}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2 flex-wrap">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-[#800020]'
                    : 'w-2 h-2 bg-gray-400 hover:bg-[#800020]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                goToSlide(index);
                openModal(item);
              }}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                currentIndex === index ? 'ring-2 ring-[#800020] ring-offset-2' : ''
              }`}
            >
              <div className="h-24 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Screen View */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-semibold">{selectedImage.title}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Gallery showcasing our school facilities, events, and student life
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;