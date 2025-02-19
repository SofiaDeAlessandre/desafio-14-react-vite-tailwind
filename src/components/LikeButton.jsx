import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(true);
  const addLike = () => {
    setLike(!like);
  };

  return (
    <div className="flex justify-center">
      {like ? (
        <button
          onClick={addLike}
          className="bg-blue-500 p-2 w-18 rounded-md my-4 text-white"
        >
          Like
        </button>
      ) : (
        <button
          onClick={addLike}
          className="bg-red-500 p-2 w-18 rounded-md my-4 text-white"
        >
          Unlike
        </button>
      )}
    </div>
  );
};

export default LikeButton;
