import { useState } from "react"

const Count = () => {

    const [count, setCount] = useState(0)
    const incrementar = () => {
        setCount(count + 1)
    }


  return (
    <>
    <div className="flex justify-center items-center flex-col">
        <p>{count}</p>
    <button onClick={incrementar} disabled={count >= 20}
     className={`p-2 w-24 rounded-md my-4 text-white ${count >= 20 ? 'bg-gray-400' : 'bg-blue-500'}`}>Incrementar</button>
    </div>
    </>
  )
}

export default Count