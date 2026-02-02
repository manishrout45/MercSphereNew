import { useEffect } from "react";

/* ================================
   INSTAGRAM EMBED FEED (NO API)
================================ */
const InstagramFeed = () => {
  // Use actual Instagram post images here
  const postImages = [
    "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.82787-15/616111374_17885707410425535_2406678667721954510_n.heic?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=100&ig_cache_key=MzgwOTM4MTk1MDQ2MjAzNzg2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=ZzLMYUTEWwwQ7kNvwFPQkYK&_nc_oc=AdkJxbkkhyMZtkS7tsc8p3Ouw9O9Bm_yTOJ9jrRTq_VSTqpo1vLzsXeHqwYfVvKBvJtCMxnbK7OzjExj2PWpHGCU&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbbi5-3.fna&_nc_gid=fSi2gOypAUt4hdLztPtEYQ&oh=00_AfoK5z-5gygQie0v1H4LygROnwjoiFOkT5q-U2uL22l0JQ&oe=697292AE", // replace with real image URL
    "https://instagram.fbbi5-2.fna.fbcdn.net/v/t51.82787-15/612494079_17885072289425535_69399878930120689_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzgwNTA5NDI1NzI4ODc4OTU5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=YIhe1bGhZFYQ7kNvwGrtrEa&_nc_oc=AdnGWVdFIWPjh0yJdTHkEGnxk8iHOYrdNkfwMNQWPtWcsWhabK41S_GaXCD29VadQLMlDvdklvUQuOWnA92ZcALF&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbbi5-2.fna&_nc_gid=fSi2gOypAUt4hdLztPtEYQ&oh=00_Afqr9tFHh93vydVFANI8mqEMt-tIlFAfsJ88ln63DUyVYA&oe=697271E9",
    "https://instagram.fbbi5-1.fna.fbcdn.net/v/t51.75761-15/505449077_17861628873425535_1952484083355691293_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzY1OTI3NjExMDExMTk1MzgzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=rpYzPGZJuJUQ7kNvwHWBYfb&_nc_oc=AdmVaTx5NYTKGNXRBlrthfn3syKVgaWnxHKxVFI2uuDfo2a3a33itrDmyTQ7agmVuin0jaXK3iSC2mcfX3XNDF3C&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbbi5-1.fna&_nc_gid=9KiDra3EWAwEPBbAWXeAtQ&oh=00_AfpvA3Tm3g4UaLSTz6Xf4wwFc0pc7XI24GKp8mrsUX7uRw&oe=69729399",
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {postImages.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={src}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};


/* ================================
   FOOTER
================================ */
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

      {/* OVERLAY */}
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
              cloud services, and digital transformation.
            </p>

            <p className="mt-3 text-sm flex items-center gap-2">
              <i className="fa-solid fa-phone text-yellow-400"></i>
              +91 9777 220 660
            </p>

            <p className="mt-2 text-sm flex items-center gap-2">
              <i className="fa-solid fa-envelope text-yellow-400"></i>
              contact@mercsphere.com
            </p>

            <div className="flex gap-4 mt-6">
              {[
                { icon: "fa-facebook-f", link: "#" },
                { icon: "fa-instagram", link: "#" },
                { icon: "fa-linkedin-in", link: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition hover:scale-110"
                >
                  <i className={`fa-brands ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* BLOG */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> Latest Insights
            </h2>

            <div className="space-y-4">
              {[
                "How Modern Web Apps Scale Faster",
                "Why Cloud Solutions Matter in 2025",
              ].map((title, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-blue-600/30 flex items-center justify-center text-sm font-semibold">
                    Blog
                  </div>
                  <div>
                    <p className="text-sm">{title}</p>
                    <p className="text-xs opacity-60 mt-1">
                      Tech Team | Merc Sphere
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> Quick Links
            </h2>

            <ul className="space-y-2 text-sm">
              {["About Us", "Services", "Case Studies", "Careers", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-yellow-300">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* INSTAGRAM */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-400">●</span> Instagram
            </h2>

            <InstagramFeed />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Merc Sphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
