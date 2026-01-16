import { useEffect } from "react";

export default function InstagramReels() {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  const reels = [
    "https://www.instagram.com/reel/DSK1Yz6gcVU/",
    "https://www.instagram.com/reel/DR6nDIXAbAj/",
    "https://www.instagram.com/reel/DRxbZuPE7Zl/",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Follow Us on Instagram
        </h2>
        <p className="text-gray-600 mb-10">
          Explore our latest reels, moments, and behind-the-scenes stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {reels.map((url, index) => (
            <div key={index} className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-captioned
                data-instgrm-version="14"
                style={{ maxWidth: "540px", width: "100%" }}
              ></blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
