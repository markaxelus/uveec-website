import Image from "next/image";
import Link from "next/link";
import { CompanyName } from "../../constants";
import { FaInstagram, FaLinkedin, FaGithub, FaSlack } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-baseline h-[700px] md:h-72 w-full space-y-7 md:space-y-16 bg-royalBlue ">
        <Link href="/" passHref>
          <a className="relative h-16 w-36 mb-20 top-16 hover:cursor-pointer">
            <Image layout="fill" src="/images/uveec2.png" />
          </a>
        </Link>
        <div className="space-y-2 flex flex-col text-center md:text-start">
          <h2 className="text-white font-bold mb-4">Product</h2>
          <Link href="/projects/#usv" passHref>
            <a className="text-white hover:text-orange hover:cursor-pointer">
              Unmanned Surface Vehicle
            </a>
          </Link>
        </div>

        <div className="space-y-2 flex flex-col text-center md:text-start">
          <h2 className="text-white font-bold mb-4">Information</h2>
          <Link href="/about" passHref>
            <a className="text-white hover:text-orange hover:cursor-pointer">
              About Us
            </a>
          </Link>
          <Link href="/about/#team" passHref>
            <a className="text-white hover:text-orange hover:cursor-pointer">
              Meet the Team
            </a>
          </Link>
          <Link href="/error" passHref>
            <a className="text-white hover:text-orange hover:cursor-pointer">
              Faculty Supervisor
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/uvicenvironment/?hl=en"
            passHref
          >
            <a className="text-white hover:text-orange hover:cursor-pointer">
              Community Outreach
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-baseline">
          <p className="text-white font-bold">
            Get the latest updates from UVEEC
          </p>
          <div className="flex flex-row items-center md:items-baseline -space-x-1">
            <Link
              href="https://www.instagram.com/uvicenvironment/?hl=en"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-11 w-11 p-2 fill-white hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/company/university-of-victoria-environmental-engineering-club-uveec/"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-11 w-11 p-2 fill-white hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
            <Link
              href="https://github.com/UVic-Environmental-Engineering-Club"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-11 w-11 p-2 fill-white hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
            <Link href="https://uvicenvironment.slack.com" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FaSlack className="h-11 w-11 p-2 fill-white hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20 md:h-14 w-full p-4 bg-[#102543]">
        <p className="text-xs text-center text-white">
          Copyright © 2022 {CompanyName}.
        </p>
        <p className="text-xs text-center text-white">
          Designed in Victoria, British Columbia
        </p>
      </div>
    </div>
  );
};
