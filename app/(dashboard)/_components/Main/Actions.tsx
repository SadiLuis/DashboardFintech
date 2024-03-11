import { CircleDollarSign, FileStack, HandCoins, Receipt } from "lucide-react";

const Actions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full h-full p-4 space-x-0 md:space-x-4 justify-evenly">
      <div className="relative text-red-600 w-full md:w-1/4 h-20 space-x-2 rounded-sm justify-center items-center inline-flex font-medium cursor-pointer border border-red-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white">
        <CircleDollarSign />
        <p>Send Money</p>
      </div>
      <div  className="relative text-red-600 w-full md:w-1/4 h-20 space-x-2 rounded-sm justify-center items-center inline-flex font-medium cursor-pointer border border-red-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white">
      <Receipt />
        <p>Receive Money</p>
      </div>
      <div  className="relative text-red-600 w-full md:w-1/4 h-20 space-x-2 rounded-sm justify-center items-center inline-flex font-medium cursor-pointer border border-red-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white">
      <HandCoins />
        <p>Change Divisas</p>
      </div>
      <div  className="relative text-red-600 w-full md:w-1/4 h-20 space-x-2 rounded-sm justify-center items-center inline-flex font-medium cursor-pointer border border-red-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white">
      <FileStack />
        <p>Transactions History</p>
      </div>
    </div>
  );
};

export default Actions;
