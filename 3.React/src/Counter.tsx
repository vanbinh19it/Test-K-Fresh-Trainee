import { useState } from 'react'

type CounterProps = {
  initialValue?: number
  min?: number
  max?: number
}

export function Counter({ initialValue = 0, min = 0, max = 10 }: CounterProps) {
  const safeInitial = Math.min(Math.max(initialValue, min), max)
  const [count, setCount] = useState<number>(safeInitial)

  const handleIncrement = () => {
    setCount((prev) => {
      const next = prev + 1
      return next > max ? prev : next
    })
  }

  const handleDecrement = () => {
    setCount((prev) => {
      const next = prev - 1
      return next < min ? prev : next
    })
  }

  const isAtMin = count <= min
  const isAtMax = count >= max

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <p className="counter-subtitle">
        Simple example of controlled state with min/max.
      </p>

      <div className="counter-value">{count}</div>

      <div className="counter-actions">
        <button onClick={handleDecrement} disabled={isAtMin}>
          Decrement
        </button>
        <button onClick={handleIncrement} disabled={isAtMax}>
          Increment
        </button>
      </div>

      {isAtMax && <p className="counter-message">Maximum reached!</p>}
    </div>
  )
}

