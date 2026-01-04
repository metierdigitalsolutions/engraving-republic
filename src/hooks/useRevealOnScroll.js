import { useEffect, useRef } from "react"

export default function useRevealOnScroll(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, ...options }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}
