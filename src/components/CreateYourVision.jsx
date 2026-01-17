export default function CreateYourVision() {
  return (
    <section className="w-full bg-blue-900 py-28">
      <div className="max-w-[1100px] mx-auto px-6 text-center">

        {/* HEADING */}
        <p className="text-sm tracking-widest text-yellow-500 mb-3 uppercase">
          Process
        </p>
        <h2 className="text-[32px] font-semibold text-white mb-16">
          Create Your Vision
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              step: "01",
              title: "Clarify Your Goals",
              img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            },
            {
              step: "02",
              title: "Build the Plan",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            },
            {
              step: "03",
              title: "Take Aligned Action",
              img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative h-[380px] rounded-2xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* WHITE CARD */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 transition-all duration-500 ease-out group-hover:-translate-y-6">

                {/* STEP */}
                <p className="text-sm font-semibold text-[#1CB0E6] mb-2">
                  {item.step}
                </p>

                {/* TITLE */}
                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                  {item.title}
                </h4>

                {/* CTA */}
                <div className="relative h-10 overflow-hidden">
                  {/* CIRCLE */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#1CB0E6] flex items-center justify-center text-white transition-all duration-500 group-hover:w-full">
                    <span className="transition-all duration-300 group-hover:opacity-0">
                      →
                    </span>
                  </div>

                  {/* BUTTON TEXT */}
                  <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-6">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
