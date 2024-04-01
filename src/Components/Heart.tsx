import {useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Heart = () => {
    const [favorite, setFavorite] = useState(false);
    const changeFavorite = () => {
      setFavorite(!favorite)
    }
  return (
    <div>
    {favorite ? <FaHeart className="absolute top-4 right-4 sm:right-3 scale-125 md:scale-150 text-gray-300" onClick={changeFavorite} /> : 
    <FaRegHeart className="absolute top-4 right-2 sm:right-3 text-gray-300 scale-125 md:scale-150" onClick={changeFavorite} />}
    </div>
  )
}

export default Heart