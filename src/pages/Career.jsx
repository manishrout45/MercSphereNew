import React from "react";

export default function Career() {
  return (
    <>
      {/* HERO */}
      <section
  className="w-full text-white pt-32 pb-20 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/dots-lines-technology-glowing-abstract-blue-background_936042-592.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Careers at Merc Sphere
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Join our innovative team and build cutting-edge digital solutions for global clients. Grow your expertise, work on exciting and meaningful projects, and play a key role in shaping the future of technology.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Join Merc Sphere?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
              <p className="text-gray-500">
                Continuous learning and career advancement programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Innovative Projects</h3>
              <p className="text-gray-500">
                Work with modern technologies and real-world challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Collaborative Culture</h3>
              <p className="text-gray-500">
                Supportive environment that values teamwork and ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Current Openings
          </h2>

          <div className="space-y-6">

            <div className="border rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Frontend Developer</h3>
                <p className="text-gray-500 text-sm">Experience: 1-2 Years</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Apply Now
              </button>
            </div>

            <div className="border rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">UI/UX Designer</h3>
                <p className="text-gray-500 text-sm">Experience: Fresher / 1 Year</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
