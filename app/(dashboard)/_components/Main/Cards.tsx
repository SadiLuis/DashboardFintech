import Image from "next/image";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lato({
  subsets: ["latin"],
  weight: ["700"]
})

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className={cn(
        "text-center text-2xl md:text-3xl p-4 mb-4", font.className,
      )}>
        Welcome, here are your cards! 
      </span>
      <div className="flex flex-row w-full md:w-1/2 justify-center gap-4">
        <div className="w-full md:w-1/2 p-2">
          <Image src="red_card.svg" alt="red" width={250} height={250} layout="responsive" />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Image src="black_card.svg" alt="black" width={250} height={250} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
