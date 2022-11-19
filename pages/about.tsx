import type { NextPage } from "next";
import { medium_lorem } from "../src/constants";
import { BaseLayout } from "../src/Layout/BaseLayout";
import Image from "next/image";
import Carousel from "nuka-carousel";

const About: NextPage = () => {
  return (
    <BaseLayout>
      <section id="about">
        <div className="relative h-72 md:h-52 w-full">
          <Image
            layout="fill"
            src="/images/header3.jpg"
            className="object-cover blur-sm"
            alt={""}
          />
          <div className="absolute bg-black h-full w-full opacity-50" />

          <div className="relative text-lg text-white max-w-3xl mx-auto py-10 md:py-16 px-5 md:p-0">
            {medium_lorem}
          </div>
        </div>
      </section>

      <main id="team">
        <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
          <section id="admin">
            <div className="flex flex-col md:flex-row justify-start md:justify-evenly max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Administration
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
              </div>
              <div className="flex flex-col pt-4">
                <div className="h-52 w-52 bg-slate-400 rounded-xl"></div>
                <div className="text-start md:text-center">
                  <div className="text-slate-900 font-semibold">
                    Julia Jungwirth
                  </div>
                  <div className="text-slate-400 mt-0.5 text-sm leading-6">
                    Team Lead
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="h-52 w-52 bg-slate-400 rounded-xl"></div>
                <div className="text-start md:text-center">
                  <div className="text-slate-900 font-semibold">
                    Nathan Archibald
                  </div>
                  <div className="text-slate-400 mt-0.5 text-sm leading-6">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="special project">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Special Project
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className=" flex flex-col md:flex-row">
                  <div className="flex flex-col pt-4">
                    <div className="h-52 w-52 bg-slate-400 rounded-xl" />
                    <div className="text-start md:text-center">
                      <div className="text-slate-900 font-semibold">
                        Xavier Agustines
                      </div>
                      <div className="text-slate-400 mt-0.5 text-sm leading-6">
                        Special Project Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Carousel>
                <div className="h-96 w-96 md:w-80">
                  <Image
                    layout="fill"
                    src="/images/manufacturing.jpg"
                    className="object-cover"
                    alt={""}
                  />
                </div>
              </Carousel>
            </div>
          </section>

          <section id="mechanical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Mechanical
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className="flex flex-col md:flex-row justify-around">
                  <div className="flex flex-col pt-4">
                    <div className="h-52 w-52 bg-slate-400 rounded-xl"></div>
                    <div className="text-start md:text-center">
                      <div className="text-slate-900 font-semibold">
                        Mariana Latta Suazo
                      </div>
                      <div className="text-slate-400 mt-0.5 text-sm leading-6">
                        Mechanical Lead
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-4">
                    <div className="h-52 w-52 bg-slate-400 rounded-xl"></div>
                    <div className="text-start md:text-center">
                      <div className="text-slate-900 font-semibold">
                        Eli Grant
                      </div>
                      <div className="text-slate-400 mt-0.5 text-sm leading-6">
                        Co-Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full md:w-80">
                <Carousel>
                  <div className="h-96 w-96 md:w-80">
                    <Image
                      layout="fill"
                      src="/images/manufacturing.jpg"
                      className="object-cover"
                      alt={""}
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          <section id="electrical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Electrical
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className=" flex flex-col md:flex-row">
                  <div className="flex flex-col pt-4">
                    <div className="h-52 w-52 bg-slate-400 rounded-xl" />
                    <div className="text-start md:text-center">
                      <div className="text-slate-900 font-semibold">
                        Michael Nicolaisen
                      </div>
                      <div className="text-slate-400 mt-0.5 text-sm leading-6">
                        Electrical Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full md:w-80">
                <Carousel>
                  <div className="h-96 w-96 md:w-80">
                    <Image
                      layout="fill"
                      src="/images/manufacturing.jpg"
                      className="object-cover"
                      alt={""}
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          <section id="software">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Software
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className=" flex flex-col md:flex-row">
                  <div className="flex flex-col pt-4">
                    <div className="h-52 w-52 bg-slate-400 rounded-xl" />
                    <div className="text-start md:text-center">
                      <div className="text-slate-900 font-semibold">
                        Philip Esclamado
                      </div>
                      <div className="text-slate-400 mt-0.5 text-sm leading-6">
                        Software Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full md:w-80">
                <Carousel>
                  <div className="h-96 w-96 md:w-80">
                    <Image
                      layout="fill"
                      src="/images/manufacturing.jpg"
                      className="object-cover"
                      alt={""}
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          <section id="advisor">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Advisor
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
              </div>
              <div className="flex flex-row pt-4">
                <div className="flex flex-col">
                  <div className="h-52 w-52 bg-slate-400 rounded-xl"></div>
                  <div className="text-start md:text-center">
                    <div className="text-slate-900 font-semibold">
                      Dr. Caterina Valeo
                    </div>
                    <div className="text-slate-400 mt-0.5 text-sm leading-6">
                      Faculty Supervisor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </BaseLayout>
  );
};

export default About;
