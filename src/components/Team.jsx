"use client"

import { useState, useEffect, useCallback, useRef } from "react"

const DEFAULT_MEMBERS = [
  {
    id: 1,
    name: "Khen Vonoe Gabriel",
    role: "Chief Executive Officer",
    image: "/khen.webp",
  },
  {
    id: 2,
    name: "Eldon Rex Santos",
    role: "Head of Product Design",
    image: "/eldon.webp",
  },
  {
    id: 3,
    name: "Simon Paul Bolus",
    role: "Lead Software Engineer",
    image: "/simon.webp",
  },
  {
    id: 4,
    name: "Kaiross Gabriel Sta Ana",
    role: "Marketing Director",
    image: "/kaiross.webp",
  },
  {
    id: 5,
    name: "Yuki Ezekiel Ablen",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
  },
]

const PERSPECTIVE = 1600
const SCALE_STEP = 0.15
const MAX_VISIBLE = 2
const DEPTH = 220

function TeamCoverflowGallery({
  members = DEFAULT_MEMBERS,
  radius = 24,
  tilt = 12,
  sideTilt = 0,
  gap = 10,
  opacity = 60,
  autoplay = false,
  autoplayInterval = 3000,
  style,
}) {
  const list = members.length > 0 ? members : DEFAULT_MEMBERS
  const n = list.length
  const [active, setActive] = useState(0)
  const lockRef = useRef(false)

  // Mobile responsiveness for card dimensions
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const cardWidth = isMobile ? 280 : 380
  const cardHeight = isMobile ? 380 : 460
  const minContainerHeight = isMobile ? 420 : 520

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

  return (
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
        overflow: "hidden",
        outline: "none",
        ...style,
      }}
      tabIndex={0}
      role="group"
      aria-label="Team Members Carousel"
      onKeyDown={onKeyDown}
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
          
          // Adjusted spacing factor for smaller screens
          const txSpacing = isMobile ? gap * 18 : gap * 28
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
              "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            opacity: visible ? 1 : 0,
            cursor: autoplay || isActive ? "default" : "pointer",
            pointerEvents: visible && !autoplay ? "auto" : "none",
            backgroundColor: "#121212",
            boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.5)" : "none",
          }

          return (
            <div
              key={member.id || i}
              style={cardStyle}
              onClick={() => handleCardClick(i)}
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
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  pointerEvents: "none",
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative z-10 bg-white min-h-screen py-16 sm:py-24 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Centered */}
        <div className="max-w-2xl mb-8 relative z-10 text-center mx-auto">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
            Who We Are
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            The creative minds and engineers driving the project forward.
          </p>
        </div>

        {/* Coverflow Gallery */}
        <div className="relative z-10">
          <TeamCoverflowGallery />
        </div>
      </div>
    </section>
  )
}