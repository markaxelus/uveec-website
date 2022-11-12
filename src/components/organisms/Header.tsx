import { Logo } from "../atoms";
import { NavBar } from "../molecules";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between h-16 w-full px-4 py-2 shadow-2xl bg-royalBlue">
      <Logo src="uveec.png" className="h-10 w-28" />
      <div className="hidden md:block">
        <NavBar />
      </div>
    </div>
  );
};
