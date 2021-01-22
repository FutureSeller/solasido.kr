import { useState, useEffect } from 'react'

export default function useHashHeights() {
  const [heights, setHeights] = useState<number[]>([])

  useEffect(() => {
    setHeights([
      document.getElementById('main')?.clientHeight ?? 0,
      document.getElementById('about')?.clientHeight ?? 0,
      document.getElementById('projects')?.clientHeight ?? 0,
      document.getElementById('contact')?.clientHeight ?? 0,
    ].map((s => (v: number) => s += v)(0)))
  }, [])

  return heights
}