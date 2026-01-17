import { useEffect, useState } from "react";

const InstagramFeed = ({ igBusinessId, accessToken, limit = 6 }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://graph.facebook.com/v24.0/${igBusinessId}/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=${limit}&access_token=${accessToken}`
        );
        const data = await res.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Failed to fetch Instagram posts:", err);
      }
    };

    fetchPosts();
  }, [igBusinessId, accessToken, limit]);

  if (posts.length === 0) return <p className="text-sm opacity-70">No posts found</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg hover:scale-105 transform transition"
        >
          <img
            src={post.media_url}
            alt={post.caption || "Instagram post"}
            className="w-full h-24 object-cover"
          />
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <video
          className="w-full h-full object-cover"
          src="/assets/videos/footer-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* DARK + BLUE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/90 to-blue-950/95 -z-10"></div>

      {/* CONTENT */}
      <div className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> About Merc Sphere
            </h2>

            <p className="text-sm opacity-80 leading-relaxed">
              Merc Sphere is a technology-driven IT solutions company
              specializing in web development, mobile applications,
              cloud services, and digital transformation for businesses
              worldwide.
            </p>

            <p className="mt-3 text-sm opacity-90 hover:text-yellow-300 transition flex items-center gap-2">
              <i className="fa-solid fa-phone text-yellow-400"></i>
              +91 9777 220 660
            </p>

            <p className="mt-2 text-sm opacity-90 hover:text-yellow-300 transition flex items-center gap-2">
              <i className="fa-solid fa-envelope text-yellow-400"></i>
              contact@mercsphere.com
            </p>

            <div className="flex gap-4 mt-6">
              {[{ icon: "fa-facebook-f", link: "#" },
                { icon: "fa-instagram", link: "#" },
                { icon: "fa-linkedin-in", link: "#" }].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition transform hover:scale-110"
                >
                  <i className={`fa-brands ${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* LATEST INSIGHTS */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> Latest Insights
            </h2>

            <div className="space-y-4">
              {["How Modern Web Apps Scale Faster",
                "Why Cloud Solutions Matter in 2025"].map((title, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-blue-600/30 flex items-center justify-center text-sm font-semibold">
                    Blog
                  </div>
                  <div>
                    <p className="text-sm opacity-90">{title}</p>
                    <p className="text-xs opacity-60 mt-1">
                      Tech Team &nbsp; | &nbsp; Merc Sphere
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="w-full px-4 py-2 rounded-l-lg text-gray-800 text-sm focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-lg text-white">
                ➤
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> Quick Links
            </h2>

            <ul className="space-y-2 text-sm opacity-90">
              {["About Us", "Services", "Case Studies", "Careers", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INSTAGRAM FEED */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> Instagram
            </h2>

            <InstagramFeed
              igBusinessId="17841472766045324" // replace with your IG Business ID
              accessToken="EAANVTggdUQQBQev4PsIOgAaaG6qR4FduOTUCPFnCKIruAZCTkNMpbgwQrYWq1biCpLZBq7ZAK0SYXPUQ4qnXbVFJWflQmeZBScDhaq4YJCxyY6ZBpeqZB3LZAx4vhIWsMBra9KKVZAEtQ8lxORKAWlmaXRmNdLXpkThDnNZCzB0JFijFngv1zaMUGj0ske2dZAaSgCkpO651MvlnkoJ1VH0GeRig1ujgNUhlcaJm6Pfh8io6oZD"    // replace with your User access token
              limit={6}                        // latest 6 posts
            />
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Merc Sphere. All rights reserved.
          <span className="ml-2">
            Crafted with ❤️ by{" "}
            <a href="https://mercsphere.com/" className="hover:text-yellow-400">
              Merc Sphere
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
