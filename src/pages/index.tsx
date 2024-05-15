import { useAppDispatch, useAppSelector } from "@/state"
import { decrement, increment } from "@/state/counter"

const HomePage = () => {
  const value = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
    <div>Home</div>
    <div>Value: {value}</div>
    <button className="btn-blue" onClick={handleIncrement}>Tăng</button>
    <button onClick={handleDecrement}>Giảm</button>
    </>
  )
}

export default HomePage