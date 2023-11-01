import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

const Banner = (props: { image: string | any }) => {
  const { image } = props;
  const [like, setLike] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${image.src})` }}
      className="relative h-[400px] w-full rounded-[20px] bg-cover bg-no-repeat lg:h-[930px]"
    >
      <div
        onClick={() => setLike(!like)}
        className="absolute right-5 top-7 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-800 text-3xl font-bold text-white hover:cursor-pointer"
      >
        {like ? <IoHeart /> : <IoHeartOutline />}
      </div>
    </div>
  );
};

export default Banner;
