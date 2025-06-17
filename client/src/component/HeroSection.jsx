import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-outfit">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white bg-black bg-opacity-60 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug sm:leading-tight tracking-wide drop-shadow-lg animate-fade-in-up mb-4 sm:mb-6">
          The best journeys in life are those that<br />
          <span className="text-blue-400">answer questions you never thought to ask</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl font-medium max-w-md sm:max-w-2xl leading-relaxed text-white/90 animate-fade-in-up mb-6 sm:mb-8">
          Provide basic information about yourself so we can start looking for your perfect match.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105">
            Find Jobs
          </button>
          <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105">
            Hire Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
