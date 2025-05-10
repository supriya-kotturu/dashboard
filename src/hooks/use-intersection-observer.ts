'use client'

import { useEffect, useState, useRef, MutableRefObject } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}): [MutableRefObject<T | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold,
        root,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, root, rootMargin])

  return [ref, isIntersecting]
}
