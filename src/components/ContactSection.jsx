import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs tracking-widest text-blue-500 mb-3 uppercase">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
            Get in touch with MercSphere<br className="hidden sm:block" />
            expert team
          </h2>

          <p className="text-gray-500 text-sm max-w-md mb-10 leading-relaxed">
            We'd love to hear from you. Whether you have a question or need support,
            our team at MercSphere is ready to help you quickly and effectively.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6 text-sm">

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                <FiPhone />
              </span>
              <div>
                <p className="text-gray-400">Call us</p>
                <p className="font-medium text-gray-900">
                  +91 993-881-0752
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                <FiMail />
              </span>
              <div>
                <p className="text-gray-400">Email us</p>
                <p className="font-medium text-gray-900">
                  mercsphere@gmail.com
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                <FiMapPin />
              </span>
              <div>
                <p className="text-gray-400">Our Location</p>
                <p className="font-medium text-gray-900">
                  Bhubaneswar, Odisha
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-sm border border-blue-500/60">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C9A16E]"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C9A16E]"
            />

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C9A16E]"
            />

            <textarea
              rows="4"
              placeholder="Write a message"
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C9A16E] resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-800 text-white text-sm font-medium py-3 rounded-full hover:bg-blue-700 transition"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
