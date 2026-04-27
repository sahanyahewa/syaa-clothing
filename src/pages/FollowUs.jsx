import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { BackgroundGradient } from "../ui/background-gradient";

// ─── Social Media Icons (inline SVG) ──────────────────────────────────────────
// If you have your own PNG files in src/assets/icons/, replace each icon below with:
// <img src={tiktokIcon} alt="TikTok" className="w-10 h-10 object-contain" />
// And import at the top like: import tiktokIcon from '../assets/icons/tiktok.png'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white drop-shadow-lg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white drop-shadow-lg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white drop-shadow-lg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white drop-shadow-lg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ─── Social card data ──────────────────────────────────────────────────────────
const SOCIALS = [
  {
    platform: "TikTok",
    label: "syaa.clothing",
    icon: <TikTokIcon />,
    // Icon circle styles
    iconCircleClass: "bg-black ring-2 ring-pink-500 ring-offset-1 ring-offset-transparent",
    iconCircleStyle: {},
    // Label bar gradient
    barStyle: {
      background: "linear-gradient(90deg, #111111 0%, #1a1a1a 100%)",
      border: "2px solid rgba(255, 80, 120, 0.75)",
    },
  },
  {
    platform: "Instagram",
    label: "syaa_clothing_",
    icon: <InstagramIcon />,
    iconCircleClass: "ring-2 ring-yellow-400 ring-offset-1 ring-offset-transparent",
    iconCircleStyle: {
      background:
        "radial-gradient(circle at 30% 110%, #ffdb00, #f70 25%, #ee2a7b 50%, #6228d7 85%)",
    },
    barStyle: {
      background: "linear-gradient(90deg, #ee2a7b 0%, #f77737 55%, #feda77 100%)",
      border: "2px solid rgba(255, 150, 50, 0.7)",
    },
  },
  {
    platform: "WhatsApp",
    label: "+94 77 176 0809",
    icon: <WhatsAppIcon />,
    iconCircleClass: "bg-green-500 ring-2 ring-green-300 ring-offset-1 ring-offset-transparent",
    iconCircleStyle: {},
    barStyle: {
      background: "linear-gradient(90deg, #1a7a3d 0%, #25a845 100%)",
      border: "2px solid rgba(80, 200, 80, 0.6)",
    },
  },
  {
    platform: "Facebook",
    label: "Syaa Clothing",
    icon: <FacebookIcon />,
    iconCircleClass: "bg-blue-600 ring-2 ring-blue-300 ring-offset-1 ring-offset-transparent",
    iconCircleStyle: {},
    barStyle: {
      background: "linear-gradient(90deg, #0d5bc4 0%, #1877f2 100%)",
      border: "2px solid rgba(80, 140, 255, 0.6)",
    },
  },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function FollowUs() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 190, 255)"
      gradientBackgroundEnd="rgb(0, 215, 100)"
      firstColor="0, 210, 255"
      secondColor="0, 185, 150"
      thirdColor="0, 235, 95"
      fourthColor="110, 255, 60"
      fifthColor="0, 160, 255"
      pointerColor="0, 220, 200"
      containerClassName="min-h-screen"
    >
      {/* ── Centered content overlay ── */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-4 py-16 pointer-events-none">

        {/* Title */}
        <h1
          className="text-[#0d1b5e] text-center leading-none mb-2 select-none"
          style={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: "clamp(52px, 13vw, 100px)",
            letterSpacing: "0.18em",
            textShadow: "0 2px 12px rgba(0,0,0,0.12)",
          }}
        >
          FOLLOW US
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#0d2a5e] text-center mb-10 md:mb-14 select-none"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(10px, 2.8vw, 15px)",
            letterSpacing: "0.32em",
            fontWeight: 600,
          }}
        >
          ON OUR SOCIAL MEDIA CHANNELS
        </p>

        {/* Social Cards Stack */}
        <div className="flex flex-col gap-5 md:gap-7 w-[90%] md:w-[520px] max-w-[560px] pointer-events-auto">
          {SOCIALS.map((social, index) => (
            <SocialCard key={social.platform} social={social} index={index} />
          ))}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

// ─── Individual Social Card ────────────────────────────────────────────────────
function SocialCard({ social, index }) {
  return (
    <div
      className="flex items-center w-full"
      style={{
        animation: `fadeSlideUp 0.5s ease both`,
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Aceternity glowing border wrapper */}
      <BackgroundGradient
        containerClassName="rounded-full w-full"
        className="rounded-full p-0 w-full"
        animate={true}
      >
        <div className="flex items-center w-full rounded-full overflow-visible">

          {/* ── Icon Circle ── */}
          <div
            className={`
              flex items-center justify-center rounded-full flex-shrink-0
              ${social.iconCircleClass}
              z-10 relative
            `}
            style={{
              width: "clamp(62px, 15vw, 86px)",
              height: "clamp(62px, 15vw, 86px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              ...social.iconCircleStyle,
            }}
          >
            {social.icon}
          </div>

          {/* ── Label Bar ── */}
          <div
            className="flex items-center flex-1 rounded-full"
            style={{
              height: "clamp(44px, 11vw, 58px)",
              marginLeft: "-28px",
              paddingLeft: "36px",
              paddingRight: "24px",
              ...social.barStyle,
              color: "white",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 3.8vw, 22px)",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {social.label}
          </div>

        </div>
      </BackgroundGradient>
    </div>
  );
}
