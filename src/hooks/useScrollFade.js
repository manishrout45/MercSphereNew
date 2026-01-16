import { useEffect } from "react";

const useScrollFade = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .zoom-in"
    );

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            // 🔥 Stop observing once animated (VERY IMPORTANT)
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px", // smoother early trigger
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollFade;
