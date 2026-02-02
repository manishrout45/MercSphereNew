import React from "react";

const Events = () => {
  return (
    <section className="w-full bg-black text-white h-screen flex flex-col items-center justify-center px-6 sm:px-10">
      
      {/* Header / Hero Section */}
      <div className="text-center">
        {/* Header / Hero Section 
        <h3 className="text-green-500 tracking-widest text-sm mb-2 uppercase">
          Upcoming Events
        </h3>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          Experience the Nightlife
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 mb-8">
          Join us for electrifying music, stunning performances, and unforgettable nights.
        </p>

        {/* Coming Soon */}
        <span className="text-8xl sm:text-9xl font-extrabold text-green-500">
          Coming Soon
        </span>
      </div>

    </section>
  );
};

export default Events;
