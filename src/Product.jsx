import { useState } from "react";

const Product = ({ productName, productDescription }) => {

    const [isHide, setIsHide] = useState(true)

    const addDescription = () => {
        setIsHide(!isHide)
    }

  return (
    <>
      <div className="flex justify-center items-center rounded-2xl flex-col border border-gray-800 m-auto p-10 mt-10 w-96">
        <h1>{productName}</h1>
        
        { isHide ? (<h2>{productDescription}</h2>) : (<p>Se ocultó la descripción</p>)

        }
        { isHide ? (<button onClick={addDescription} className="bg-blue-500 p-2 w-18 rounded-md my-4 text-white">Ver menos</button>) : (<button onClick={addDescription} className="bg-amber-500 p-2 w-18 rounded-md my-4 text-white">Ver más</button>)}
        
      </div>
    </>
  );
};

export default Product;
