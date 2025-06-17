import React from 'react';

const Banner = ({ img, title }) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Background Image */}
      {img ? (
        <img
          src={img}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Title */}
      {title && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-3xl font-bold">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
