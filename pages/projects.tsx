import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import { medium_lorem } from "../src/constants";
import ReactTooltip from "react-tooltip";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";

const Projects: NextPage = () => {
  return (
    <BaseLayout>
      <main>
        <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
          <section id="usv">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Unmanned Surface Vehicle
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-20 space-y-4 md:space-y-0  mt-4">
                  <div className="flex flex-row items-center">
                    <h2 className="mr-1">Dimension</h2>
                    <div>
                      <FaInfoCircle
                        data-tip="Length:<br />Diameter:<br />"
                        className="h-5 w-5 hover:cursor-pointer"
                        data-html={true}
                      />
                      <ReactTooltip place="right" type="info" effect="solid" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <h2 className="mr-1">Marine Propulsion</h2>
                    <div>
                      <FaInfoCircle
                        data-tip="Motor:<br /> Sprint speed: <br /> Cruise speed:"
                        className="h-5 w-5 hover:cursor-pointer"
                        data-html={true}
                      />
                      <ReactTooltip place="right" type="info" effect="solid" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <h2 className="mr-1">Performance</h2>
                    <div>
                      <FaInfoCircle
                        data-tip="Filtration:"
                        className="h-5 w-5 hover:cursor-pointer"
                        data-html={true}
                      />
                      <ReactTooltip place="right" type="info" effect="solid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 w-full md:w-96 mt-10 md:mt-0">
                <Image
                  layout="fill"
                  src="/images/usv.png"
                  className="object-cover rounded-xl"
                  alt={""}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Projects;
