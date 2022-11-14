import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import Image from "next/image";
import { SponsorMap } from "../src/constants";
import Link from "next/link";


const Sponsors: NextPage = () => {
  return (
    <BaseLayout>
        <div className="container mx-auto px-6 grid lg:grid-cols-3 justify-items-center">
          {SponsorMap.map(card => (
            <div className="w-full h-64 lg:h-64 lg:w-96 relative hover:cursor-pointer overflow-hidden group">
              <Link href={card.link} passHref>
                <a target="_blank" rel="noopener noreferrer">
                <Image 
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  className="group-hover:blur-md transition-all duration-100 ease-out"
                />
              <div className="inset-0 flex justify-center items-center absolute p-5 opacity-0 scale-110 bg-black/40 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                <h3 className="text-white text-2xl md:text-3xl font-bold">{card.title}</h3>
              </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
    </BaseLayout>
  );
};

export default Sponsors;
