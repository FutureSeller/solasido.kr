import { useRef, useEffect, useCallback } from 'react'
import type { DependencyList } from 'react'

export default function useCallbackRef<T extends (...args: any[]) => any>(
  fn: T | undefined,
  deps: DependencyList = []
): T {
  const ref = useRef(fn)

  useEffect(() => {
    ref.current = fn
  })

  return useCallback(((...args) => ref.current?.(...args)) as T, deps)
}
