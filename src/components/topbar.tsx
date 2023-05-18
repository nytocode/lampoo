import { useState } from "react";
import Link from "./atoms/link";
import Icon from "./atoms/icon";
import Backdrop from "./atoms/backdrop";
import Divider from "./atoms/divider";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex flex-col">
        <div className="p-4 lg:container lg:mx-auto">
          <button
            className="md:hidden absolute"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" />
          </button>
          <h1 className="text-xl md:text-5xl font-medium text-center tracking-widest">
            LAMPOO
          </h1>
        </div>
        <Divider />
        <div
          className={`absolute bg-white z-30 h-screen  w-10/12 -translate-x-full overflow-x-hidden  ${
            menuOpen && "translate-x-0"
          } md:relative md:translate-x-0 md:flex md:h-fit transition duration-300 lg:container lg:mx-auto`}
        >
          <h2 className="text-xl tracking-widest p-3 border-b font-semibold md:hidden">
            LAMPOO
          </h2>
          <Link text="New Arrivals" to="/new-arrivals" />
          <Link text="Designer" to="/designer" />
          <Link text="Bags" to="/bags" />
          <Link text="Shoes" to="/shoes" />
          <Link text="Clothing" to="/clothing" />
          <Link text="Jewellery" to="/jewellery" />
          <Link text="Accessories" to="/accessories" />
          <Link
            text="New with Tag"
            to="/new-with-tag"
            className="text-yellow-500"
          />
          <Link
            text="Sale"
            to="/sale"
            className="text-red-600"
            borderClass="bg-red-600"
          />
        </div>
        <div className="bg-gray-100 p-2">
          <h2 className="text-red-600 text-center font-bold">
            €100 OFF YOUR FIRST ORDER OF €400+ <br /> Code: LAMPOONEW22
          </h2>
        </div>
      </header>
      <Backdrop onClick={() => setMenuOpen(false)} show={menuOpen} />
    </>
  );
};

export default Topbar;
