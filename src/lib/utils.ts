import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to throttle function calls
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  
  return function(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Utility function to memoize expensive calculations
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>()
  
  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>
    }
    
    const result = fn(...args) as ReturnType<T>
    cache.set(key, result)
    return result
  }
}
