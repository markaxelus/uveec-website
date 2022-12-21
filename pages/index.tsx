import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import { HeroBanner, SponsorMarquee } from "../src/components/molecules";
import { BaseLayout } from "../src/Layout/BaseLayout";
import { medium_lorem, short_lorem } from "../src/constants";
import { FaAngleRight } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          University of Victoria Environmental Engineering Club - Saving the
          environment one project at a time
        </title>
        <link rel="canonical" href="https://uveec.ca" key="canonical" />
        <meta
          name="description"
          content="Our organization's primary purpose is to create out of the box
          engineering solutions to everyday environmental problems in the local
          Capital Regional District of Victoria, British Columbia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="UVEEC, Environmental Engineering, Environment, Engineering, Microplastics, University of Victoria, Victoria"
        />
        <meta
          property="og:title"
          content="University of Victoria Environmental Engineering Club"
        />
        <meta property="og:url" content="https://uveec.ca" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <HeroBanner />
        <SponsorMarquee />
        <main>
          <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
            <section>
              <div className="relative justify-center text-center mx-auto my-28 w-96 md:w-[800px] px-8">
                <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
                  {short_lorem}
                </h2>
                <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
                  {medium_lorem}
                </p>
                <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                  <div className="relative h-14 w-14">
                    <Image
                      layout="fill"
                      src="/images/user.png"
                      alt={""}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
                      Julia Jungwirth
                    </div>
                    <div className="text-slate-400 mt-0.5 text-sm leading-6">
                      Team Lead of UVEEC
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="team">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="relative h-16 w-16">
                  <Image
                    layout="fill"
                    src="/images/united.png"
                    alt={""}
                    priority
                  />
                </div>
                <h2 className="mt-8 font-semibold text-sky-500">Teamwork</h2>
                <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  One of our club&apos;s main goals is to give student hands-on
                  engineering experience outside of their regular class work.
                </p>
                <p className="mt-4 max-w-3xl text-slate-400 space-y-6 ">
                  The flexible nature of our club allows us to focus on one
                  small-scale project of varying scope (6-36 months per
                  project). Our team works to innovate and develop
                  proof-of-concept solutions that can foster innovative
                  solutions to environmental problems.
                </p>
                <Link href="/about" passHref>
                  <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 hover:cursor-pointer">
                    Learn More
                    <FaAngleRight className="overflow-visible ml-3 text-sky-300 group-hover:text-sky-400" />
                  </a>
                </Link>
              </div>
              <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
                <div className="absolute h-96 w-full bg-gradient-to-b from-sky-500 via-slate-100 to-white opacity-10">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="smallGrid"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 8 0 L 0 0 0 8"
                          fill="none"
                          stroke="gray"
                          stroke-width="0.5"
                        />
                      </pattern>
                      <pattern
                        id="grid"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect width="80" height="80" fill="url(#smallGrid)" />
                        <path
                          d="M 80 0 L 0 0 0 80"
                          fill="none"
                          stroke="gray"
                          stroke-width="1"
                        />
                      </pattern>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
                    <div className="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18">
                      <div className="absolute inset-x-0 inset-y-5 border-t border-b border-slate-100 pointer-events-none" />
                      <div className="absolute inset-x-6 inset-y-0 border-l border-r border-slate-100 pointer-events-none" />
                      <div className="bg-slate-50 overflow-hidden py-6 sm:py-9 lg:py-6 xl:py-9 px-6">
                        <div className="relative h-96">
                          <Image
                            layout="fill"
                            src="/images/manufacturing2.jpg"
                            className="object-cover"
                            alt={""}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6">
                    <div className="relative overflow-hidden shadow-xl flex h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem]">
                      <Image
                        layout="fill"
                        src="/images/team.JPG"
                        className="object-cover"
                        alt={""}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="awards">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="relative h-16 w-16">
                  <Image
                    layout="fill"
                    src="/images/medal.png"
                    alt={""}
                    priority
                  />
                </div>
                <h2 className="mt-8 font-semibold text-indigo-500">
                  Excellence
                </h2>
                <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  {short_lorem}
                </p>
              </div>
              <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
                <div className="absolute h-96 w-full bg-gradient-to-b via-slate-100 from-indigo-500 to-white opacity-10">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="smallGrid"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 8 0 L 0 0 0 8"
                          fill="none"
                          stroke="gray"
                          stroke-width="0.5"
                        />
                      </pattern>
                      <pattern
                        id="grid"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect width="80" height="80" fill="url(#smallGrid)" />
                        <path
                          d="M 80 0 L 0 0 0 80"
                          fill="none"
                          stroke="gray"
                          stroke-width="1"
                        />
                      </pattern>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
                    <div className="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18">
                      <div className="p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                        <Image
                          src="/images/award.png"
                          height={88}
                          width={66}
                          alt={""}
                          priority
                        />
                        <div className="min-w-0 relative flex-auto">
                          <h2 className="font-semibold text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                            2021 Engineering Showcase
                          </h2>
                          <Image
                            height={32}
                            width={85}
                            src="/images/reedpope.png"
                            alt={""}
                            priority
                          />
                          <p className="text-slate-400">
                            Business Acumen Award
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6">
                    <div className="relative overflow-hidden shadow-xl flex h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem]">
                      <Image
                        layout="fill"
                        src="/images/awarding.jpg"
                        className="object-cover"
                        alt={""}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </BaseLayout>
    </div>
  );
};

export default Home;
