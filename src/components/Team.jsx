"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"

const DEFAULT_MEMBERS = [
  {
    id: 1,
    name: "Yuki Ezekiel Ablen",
    role: "Team Leader",
    image: "/yuki.webp",
  },
  {
    id: 2,
    name: "Khen Vonoe Gabriel",
    role: "Tech Coordinator",
    image: "/khen.webp",
  },
  {
    id: 3,
    name: "Eldon Rex Santos",
    role: "Process Researcher",
    image: "/eldon.webp",
  },
  {
    id: 4,
    name: "Kaiross Gabriel Sta Ana",
    role: "Project Checker",
    image: "/kaiross.webp",
  },
  {
    id: 5,
    name: "Simon Paul Bolus",
    role: "Documentation Creator",
    image: "/simon.webp",
  },
]

const PERSPECTIVE = 1600
const SCALE_STEP = 0.15
const MAX_VISIBLE = 2
const DEPTH = 220

const SMOOTH_EASE = [0.16, 1, 0.3, 1]

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: SMOOTH_EASE,
    },
  },
}

const galleryContainerVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: SMOOTH_EASE,
      delay: 0.15,
    },
  },
}

function TeamCoverflowGallery({
  members = DEFAULT_MEMBERS,
  radius = 24,
  tilt = 12,
  sideTilt = 0,
  gap = 11,
  opacity = 60,
  autoplay = false,
  autoplayInterval = 3000,
  style,
}) {
  const list = members.length > 0 ? members : DEFAULT_MEMBERS
  const n = list.length
  const [active, setActive] = useState(0)
  const lockRef = useRef(false)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  )

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const cardWidth = isMobile ? 260 : 380
  const cardHeight = isMobile ? 360 : 460
  const minContainerHeight = isMobile ? 380 : 480

  useEffect(() => {
    setActive((a) => Math.max(0, Math.min(n - 1, a)))
  }, [n])

  const lock = useCallback(() => {
    lockRef.current = true
    window.setTimeout(() => {
      lockRef.current = false
    }, 600)
  }, [])

  const step = useCallback(
    (dir) => {
      if (lockRef.current) return
      lock()
      setActive((a) => (((a + dir) % n) + n) % n)
    },
    [n, lock]
  )

  const handleCardClick = useCallback(
    (i) => {
      if (autoplay || lockRef.current) return
      lock()
      setActive((a) => (i === a ? (a + 1) % n : i))
    },
    [autoplay, n, lock]
  )

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isSwipe = Math.abs(distance) > 40

    if (isSwipe) {
      if (distance > 0) {
        step(1)
      } else {
        step(-1)
      }
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  useEffect(() => {
    if (!autoplay || n < 2) return
    const id = window.setInterval(() => step(1), autoplayInterval)
    return () => window.clearInterval(id)
  }, [autoplay, autoplayInterval, n, step])

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault()
        step(1)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        step(-1)
      }
    },
    [step]
  )

  const effectiveRadius = (Math.max(0, Math.min(20, radius)) / 20) * 24
  const dim = 1 - Math.max(0, Math.min(100, opacity)) / 100

  const dotVisualOrder = [3, 4, 0, 1, 2]

  return (
    <div className="flex flex-col items-center w-full">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: minContainerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: `${PERSPECTIVE}px`,
          overflow: "visible",
          outline: "none",
          ...style,
        }}
        tabIndex={0}
        role="group"
        aria-label="Team Members Carousel"
        onKeyDown={onKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            position: "relative",
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {list.map((member, i) => {
            let rel = i - active
            if (rel > n / 2) rel -= n
            if (rel < -n / 2) rel += n

            const ax = Math.abs(rel)
            const visible = ax <= MAX_VISIBLE
            const isActive = rel === 0
            const sc = Math.max(0.4, 1 - ax * SCALE_STEP)

            const txSpacing = isMobile ? gap * 13 : gap * 28
            const tx = rel * txSpacing
            const tz = -ax * DEPTH
            const ry = -rel * tilt
            const rz = rel * sideTilt

            const cardStyle = {
              position: "absolute",
              left: "50%",
              top: "50%",
              width: cardWidth,
              height: cardHeight,
              borderRadius: effectiveRadius,
              overflow: "hidden",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
              transition:
                "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              opacity: visible ? 1 : 0,
              cursor: autoplay || isActive ? "default" : "pointer",
              pointerEvents: visible && !autoplay ? "auto" : "none",
              backgroundColor: "#121212",
              boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
            }

            return (
              <div
                key={member.id || i}
                style={cardStyle}
                onClick={() => handleCardClick(i)}
                className="group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  draggable={false}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    userSelect: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: isMobile ? "16px" : "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: isMobile ? 18 : 24,
                      fontWeight: 700,
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.name}
                  </span>
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.75)",
                      fontSize: isMobile ? 12 : 14,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {member.role}
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#000000",
                    opacity: isActive ? 0 : dim,
                    transition:
                      "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 relative z-20">
        <div className="flex items-center gap-5">
          <button
            onClick={() => step(-1)}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 transition text-slate-800 shadow-sm"
            aria-label="Previous member"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {dotVisualOrder.map((targetIdx) => (
              <button
                key={targetIdx}
                onClick={() => {
                  if (lockRef.current) return
                  lock()
                  setActive(targetIdx)
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === targetIdx
                    ? "w-7 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${targetIdx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => step(1)}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 transition text-slate-800 shadow-sm"
            aria-label="Next member"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <span className="text-xs text-slate-400 font-medium tracking-wide">
          Swipe or click cards to navigate
        </span>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative z-10 bg-white min-h-screen py-16 sm:py-24 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-2xl mb-8 relative z-10 text-center mx-auto"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
            Who We Are
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            The creative minds and engineers driving the project forward.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={galleryContainerVariants}
        className="relative z-10 w-full overflow-visible"
      >
        <TeamCoverflowGallery />
      </motion.div>
    </section>
  )
}