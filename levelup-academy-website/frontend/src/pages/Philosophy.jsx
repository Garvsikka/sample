import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Philosophy.css";

const NODES = [
  {
    id: 0,
    ex: -390, ey: -240,
    bx1: -140, by1: -80, bx2: -300, by2: -190,
    cardLeft: "calc(50% - 390/1200*100% - 110px)",
    cardTop:  "calc(50% - 240/800*100% - 70px)",
    title: "100X YOUR FAMILY WEALTH",
    body: "That's the ultimate goal we are studying for. Academic success is the passport to financial success.",
    delay: 0,
  },
  {
    id: 1,
    ex: -490, ey: 0,
    bx1: -140, by1: 10, bx2: -340, by2: 0,
    cardLeft: "calc(50% - 490/1200*100% - 110px)",
    cardTop:  "calc(50% - 70px)",
    title: "ROOTED IN VALUES & CHARACTER BUILDING",
    body: "Every class begins with the Gayatri Mantra. Education without spirituality & values is incomplete.",
    delay: 0.03,
  },
  {
    id: 2,
    ex: -390, ey: 240,
    bx1: -140, by1: 80, bx2: -300, by2: 190,
    cardLeft: "calc(50% - 390/1200*100% - 110px)",
    cardTop:  "calc(50% + 240/800*100% - 70px)",
    title: "PERSONALITY DEVELOPMENT IS CORE",
    body: "Knowledge w/o communication skills & confidence is incomplete. It's part of the {{COACHING_NAME}} curriculum.",
    delay: 0.06,
  },
  {
    id: 3,
    ex: 390, ey: -240,
    bx1: 140, by1: -80, bx2: 300, by2: -190,
    cardLeft: "calc(50% + 390/1200*100% - 110px)",
    cardTop:  "calc(50% - 240/800*100% - 70px)",
    title: "HONOR YOUR SCHOOL TEACHERS",
    body: "They are the core foundation of education. We can complement schools, never replace them.",
    delay: 0.02,
  },
  {
    id: 4,
    ex: 490, ey: 0,
    bx1: 140, by1: 10, bx2: 340, by2: 0,
    cardLeft: "calc(50% + 490/1200*100% - 110px)",
    cardTop:  "calc(50% - 70px)",
    title: "REPETITION IS THE MOTHER OF LEARNING",
    body: "Every class starts with a 10-min formula test. Mastery comes from repetition, not blind practice.",
    delay: 0.04,
  },
  {
    id: 5,
    ex: 390, ey: 240,
    bx1: 140, by1: 80, bx2: 300, by2: 190,
    cardLeft: "calc(50% + 390/1200*100% - 110px)",
    cardTop:  "calc(50% + 240/800*100% - 70px)",
    title: "GAMIFICATION & CINEMATIC TEACHING",
    body: "Problems unlock levels. How ChatGPT & self-driving cars work? You'll find out here.",
    delay: 0.07,
  },
];

const SNAKE_DUR = 0.28;

export default function Philosophy() {
  const pathRefs = useRef([]);
  const [pathLengths, setPathLengths] = useState(Array(6).fill(800));
  const [visible, setVisible] = useState(Array(6).fill(false));

  useEffect(() => {
    const lengths = pathRefs.current.map((el) =>
      el ? el.getTotalLength() : 800
    );
    setPathLengths(lengths);

    NODES.forEach((n) => {
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[n.id] = true;
          return next;
        });
      }, (n.delay + SNAKE_DUR) * 1000);
    });
  }, []);

  return (
    <div className="philosophy-bg">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-600 -400 1200 800"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {NODES.map((n) => (
            <linearGradient
              key={n.id}
              id={`snakeGrad${n.id}`}
              gradientUnits="userSpaceOnUse"
              x1="0" y1="0"
              x2={n.ex} y2={n.ey}
            >
              <stop offset="0%"   stopColor="#ff2200" />
              <stop offset="50%"  stopColor="#ff6600" />
              <stop offset="100%" stopColor="#ffcc00" />
            </linearGradient>
          ))}
          <filter id="snakeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {NODES.map((n) => (
          <path
            key={n.id}
            ref={(el) => (pathRefs.current[n.id] = el)}
            className={`snake-path snake-${n.id}`}
            d={`M 0 0 C ${n.bx1} ${n.by1}, ${n.bx2} ${n.by2}, ${n.ex} ${n.ey}`}
            stroke={`url(#snakeGrad${n.id})`}
            filter="url(#snakeGlow)"
            style={{ "--path-length": pathLengths[n.id] }}
          />
        ))}

        <circle
          className="hub-circle"
          cx="0" cy="0" r="115"
          fill="#0a0a0a"
          stroke="#ff4400"
          strokeWidth="2.5"
        />
        <circle cx="0" cy="0" r="102" fill="none" stroke="#ff220025" strokeWidth="1" />

        <text x="0" y="-40" textAnchor="middle" fontFamily="'Rajdhani', sans-serif" fontSize="14" fill="#ff6600" letterSpacing="5">iconic</text>
        <text x="0" y="-2"  textAnchor="middle" fontFamily="'Black Han Sans', Impact, sans-serif" fontWeight="900" fontSize="38" fill="white" letterSpacing="4">{{COACHING_NAME}}</text>
        <text x="0" y="26"  textAnchor="middle" fontFamily="'Rajdhani', sans-serif" fontSize="13" fill="#ff6600" letterSpacing="7">PHILOSOPHY</text>
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {NODES.map((n) => (
          <motion.div
            key={n.id}
            className="node-card pointer-events-auto"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={visible[n.id] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15, type: "spring", stiffness: 260, damping: 20 }}
            style={{ left: n.cardLeft, top: n.cardTop }}
          >
            <p className="node-title">{n.title}</p>
            <p className="node-body">{n.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}