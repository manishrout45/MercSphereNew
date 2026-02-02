import React from "react";

export default function WireAnimation() {
  const services = [
    { name: "Website", color: "#1e90ff", y: 120 },
    { name: "Graphic Designing", color: "#ff0044", y: 180 },
    { name: "Digital Marketing", color: "#00ff88", y: 240 },
    { name: "SEO", color: "#ffaa00", y: 300 },
  ];

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] bg-black overflow-hidden flex items-center justify-center">

      {/* HEADLINE */}
      <h2 className="absolute top-8 sm:top-12 w-full text-center
                     text-2xl sm:text-3xl md:text-4xl
                     font-extrabold text-white z-20 leading-tight">
        Many Problems!! <br />
        <span className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
          One Solution
        </span>
      </h2>

      {/* SVG WIRES */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* WIRES */}
        <path className="wire wire1 mobile-wire" d="M0 120 C180 60, 340 300, 520 200" />
        <path className="wire wire2 mobile-wire" d="M0 180 C200 40, 360 340, 520 200" />
        <path className="wire wire3 mobile-wire" d="M0 240 C190 100, 350 360, 520 200" />
        <path className="wire wire4 mobile-wire" d="M0 300 C210 140, 380 420, 520 200" />

        {/* OUTPUT WIRE */}
        <path className="wire single-wire mobile-wire" d="M680 200 L1200 200" />

        {/* SERVICE NODES */}
        {services.map((s, index) => (
          <g key={index}>
            <circle
              cx={0}
              cy={s.y}
              r={10}
              fill={s.color}
              style={{ filter: `drop-shadow(0 0 12px ${s.color})` }}
            />

            {/* TEXT — hidden on mobile */}
            <text
              className="hidden sm:block"
              x={22}
              y={s.y + 6}
              fill={s.color}
              fontSize="14"
              fontWeight="600"
            >
              {s.name}
            </text>
          </g>
        ))}
      </svg>

      {/* CENTER BUTTON */}
      <div
        className="
          relative z-20
          px-5 py-2 text-sm
          sm:px-8 sm:py-3 sm:text-base
          md:px-10
          rounded-full text-white font-semibold
          bg-gradient-to-r from-blue-500 to-cyan-400
          shadow-[0_0_25px_rgba(59,130,246,0.8)]
        "
      >
        Merc Sphere
      </div>

      {/* 🔥 MOBILE DENOTATION BAR (BOTTOM, SINGLE ROW) */}
<div
  className="absolute bottom-6 left-1/2 -translate-x-1/2
             sm:hidden z-20
             flex gap-3 px-4 py-2
             rounded-full bg-black/70 backdrop-blur
             border border-white/10"
>
  {services.map((s, i) => (
    <span
      key={i}
      className="text-[11px] font-medium whitespace-nowrap"
      style={{ color: s.color }}
    >
      {s.name}
    </span>
  ))}
</div>


    </div>
  );
}
