import Item from "./Item";
import Logo from "./Logo";
import Suscribe from "./Suscribe";

const SideBar = () => {

  return (
    <aside className="fixed hidden z-10 h-full w-[250px] top-10 xl:flex  p-3 left-3 flex-col gap-y-2 ">
      <Logo/>
      <nav className="mb-10 mt-10">
        <ul className="space-y-14 flex flex-col justify-center items-center">
          <Item text="Overview" isActive/>
          <Item text="Wallet"/>
          <Item text="Transaction"/>
          <Item text="Support"/>
          <Item text="Setting"/>
        </ul>
      </nav>
      <Suscribe/>
    </aside>
  );
};

export default SideBar;