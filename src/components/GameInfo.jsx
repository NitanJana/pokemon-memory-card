import { useState } from 'react';

const GameInfo = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <button className="absolute right-10 top-16 flex gap-2 md:top-10">
      <p
        className={`w-52 translate-y-12 rounded-xl border-4 border-current p-2 text-lg font-semibold text-[#ec008c] ${isHidden ? 'hidden' : 'block'}`}
      >
        Don&apos;t click on the same card twice
      </p>
      <p
        className="gradient-primay flex h-10 w-10 items-center justify-center rounded-full text-xl font-semibold text-white"
        onClick={() => setIsHidden(!isHidden)}
      >
        {isHidden ? '?' : 'x'}
      </p>
    </button>
  );
};

export default GameInfo;
