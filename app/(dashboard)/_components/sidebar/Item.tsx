import { cn } from "@/lib/utils";

interface SideBarItemProps {
    text: string;
    isActive?: boolean;
}


const Item = ({ text, isActive }  :SideBarItemProps) => {
    return (
      <li className={cn(
        "relative py-2 px-6 text-center font-mono text-lg rounded text-red-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-full before:h-0 hover:before:h-full hover:text-white",
        isActive && "bg-red-600 text-white hover:opacity-75 duration-300 transition-all"
      )}>
        {text}
      </li>
    );
  };

  export default Item;