import { CompanyName } from "../../constants";
import { CompanyLogo } from "../atoms/Logo/CompanyLogo";
import { NavBar } from "../molecules";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between h-16 w-full px-4 py-2 shadow-2xl bg-royalBlue">
      <CompanyLogo className="h-10 w-32" />
      <div className="hidden md:block">
        <NavBar />
      </div>
    </div>
  );
};
