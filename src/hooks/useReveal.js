import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const targets = node.classList.contains('reveal') ? [node] : node.querySelectorAll('.reveal')
    const list = targets.length ? targets : [node]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )

    list.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
