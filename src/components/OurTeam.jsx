import React from "react";


const OurTeam = () => {
  return (
    <section className="w-full py-16 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h3 className="text-green-400 tracking-widest text-sm mb-2">
      OUR TEAM
    </h3>
    <h2 className="main-heading text-3xl md:text-4xl font-bold">
      Meet the Experts
    </h2>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center">

    {/* Card 1 (UP) */}
    <div className="flex flex-col items-center -mt-6">
      <div className="border-4 border-green-500 p-1">
        <img src="https://www.caterermiddleeast.com/cloud/2025/08/13/Jeet-Verma-Beverage-Manager-1-1024x768.jpg" className="w-40 h-40 object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-teal-600 mt-4">Suman Mishra</h3>
      <p className="font-bold text-gray-900">Pub Manager</p>
      <p className="text-sm mt-2 text-gray-600 w-48">
        Ensuring smooth operations, quality service, and customer satisfaction every day.
      </p>
    </div>

    {/* Card 2 (DOWN) */}
    <div className="flex flex-col items-center mt-6">
      <div className="border-4 border-purple-500 p-1">
        <img src="https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202308/untitled_design_-_2023-08-02t222135.274-sixteen_nine.png" className="w-40 h-40 object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-purple-600 mt-4">Pratiksha Rout</h3>
      <p className="font-bold text-gray-900">Head Bartender</p>
      <p className="text-sm mt-2 text-gray-600 w-48">
        Specializes in signature cocktails and delivering an exceptional bar experience.
      </p>
    </div>

    {/* Card 3 (UP) */}
    <div className="flex flex-col items-center -mt-6">
      <div className="border-4 border-teal-500 p-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScA6VN-BZgpAHAPtIsyOoMKUTS9wNt8elnw&s" className="w-40 h-40 object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-teal-600 mt-4">Debasish Behera</h3>
      <p className="font-bold text-gray-900">Executive Chef</p>
      <p className="text-sm mt-2 text-gray-600 w-48">
        Crafting delicious dishes that perfectly complement your drinks and mood.
      </p>
    </div>

    {/* Card 4 (DOWN) */}
    <div className="flex flex-col items-center mt-6">
      <div className="border-4 border-purple-500 p-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppJrf_Bree9_GelRTnmsqB_HWwPGy0D-TEQ&s" className="w-40 h-40 object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-purple-600 mt-4">Sneha Patnaik</h3>
      <p className="font-bold text-gray-900">DJ & Music Curator</p>
      <p className="text-sm mt-2 text-gray-600 w-48">
        Bringing the perfect beats to keep the vibe energetic throughout the night.
      </p>
    </div>

    {/* Card 5 (UP) */}
    <div className="flex flex-col items-center -mt-6">
      <div className="border-4 border-teal-500 p-1">
        <img src="https://img.freepik.com/premium-photo/smiling-waiter-ready-serve-cocktail_1158146-29612.jpg?semt=ais_hybrid&w=740&q=80" className="w-40 h-40 object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-teal-600 mt-4">Amit Kumar Das</h3>
      <p className="font-bold text-gray-900">Senior Waiter</p>
      <p className="text-sm mt-2 text-gray-600 w-48">
        Always ready with a smile, ensuring every guest feels welcomed and cared for.
      </p>
    </div>

  </div>
</section>
  );
};

export default OurTeam;
