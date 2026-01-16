import React, { useState } from "react";

const galleryImages = [
  "/assets/images/OrgImg/DSC_0429.JPG",
  "/assets/images/OrgImg/DSC_0431.JPG",
  "/assets/images/OrgImg/DSC_0465.JPG",
  "/assets/images/OrgImg/DSC_0471.JPG",
  "/assets/images/OrgImg/DSC_0535.JPG",
  "/assets/images/OrgImg/DSC_0491.JPG",
  "/assets/images/OrgImg/DSC_0655.JPG",
  "/assets/images/OrgImg/DSC_0702.JPG",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-white text-black ">

    {/* FULL-WIDTH HEADER IMAGE */}
<div className="relative w-screen h-[86vh] mb-16 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full bg-cover "
    style={{ backgroundImage: "url('/assets/images/OrgImg/DSC_0589.JPG')",
      backgroundPosition: "center 20%",
     }}
  ></div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Header content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 md:px-10 -mt-4">
    <h3 className="text-green-600 tracking-[0.2em] text-sm uppercase">
      OUR GALLERY
    </h3>

    <h2 className="text-4xl sm:text-5xl font-poppins main-heading mt-2 text-white">
      Nightlife <span className="text-green-600">Moments</span>
    </h2>

    <p className="text-gray-200 max-w-2xl mt-4 leading-relaxed">
      Experience the vibrant nightlife through our curated gallery featuring
      events, parties, music nights, and unforgettable moments.
    </p>

    {/* Decorative Line */}
    <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
  </div>
</div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-10 px-8">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden  cursor-pointer shadow-lg shadow-black/20"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              className="w-full h-48 sm:h-60 object-cover  transform group-hover:scale-110 transition duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 cursor-pointer px-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl border border-white/20 transition-all duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
