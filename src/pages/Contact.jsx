import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero / Header */}
      <div
        className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/OrgImg/DSC_0471.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6 text-white max-w-2xl">
          <h3 className="text-sm uppercase tracking-widest mb-2 text-green-300">
            Contact Us
          </h3>
          <h1 className="text-4xl sm:text-5xl font-poppins main-heading mb-4">Get in Touch</h1>
          <p className="text-gray-200">
            Have questions, want to visit Ridley Pub or make a reservation?  
            Drop us a message — we’re here to help.
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-12 px-4">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Visit / Call Us</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-xl"></i>
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-xl"></i>
              <span>support@ridleypub.com</span>
            </p>
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-xl"></i>
              <span>
                Ridley Pub, Ward 63, South‑west zone, 3rd Floor, Above Hotel Hillside Aqua,  
                NH16, Bhubaneswar – 751030
              </span>
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-medium mb-2">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-green-300"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-green-300"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="hover:text-green-300"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="hover:text-green-300"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full  pb-12">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-full pb-[56.25%] h-0">
            {/* Replace the src value with your actual embed URL from Google Maps */}
            <iframe
              title="Ridley Pub — Bhubaneswar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.1142964784153!2d85.78531067447499!3d20.25409401393576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7912a8cb54f%3A0xe8d6444a911e1659!2sRidley%20Pub%20%26%20Chimes%20Lounge!5e0!3m2!1sen!2sin!4v1764230128635!5m2!1sen!2sin" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
