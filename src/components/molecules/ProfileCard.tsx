import { FaGlobe, FaUser } from "react-icons/fa";


interface ProfileCardProps {
  name: string;
    position: string;
}

export const ProfileCard = ({ name, position }: ProfileCardProps) => {
    const imgPath = "/images/" + name + ".jpg";
  return (
    <div className="flex flex-col pt-4 items-center">
          <div className="h-52 w-52 rounded-xl">
              <img
                  src={imgPath}
                  className="object-contain object-center h-52 w-52"
                  alt={""}
              />
          </div>
      <div className="text-start md:text-center">
        <div className="text-slate-900 font-semibold dark:text-slate-50">
          {name}
        </div>
        <div className="text-slate-400 mt-0.5 text-sm leading-6 text-center">
          {position}
        </div>
      </div>
    </div>
  );
};
