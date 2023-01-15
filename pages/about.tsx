import type { NextPage } from "next";
import { medium_lorem, CarouselMap } from "../src/constants";
import { BaseLayout } from "../src/Layout/BaseLayout";
import Image from "next/image";
import { ProfileCard } from "../src/components/molecules";
import { Carousel } from "../src/components/molecules/Carousel";

const About: NextPage = () => {
  return (
    <BaseLayout>
      <section id="about">
        <div className="relative h-80 md:h-52 w-full">
          <Image
            layout="fill"
            src="/images/header3.jpg"
            className="object-cover blur-sm"
            alt={""}
          />
          <div className="absolute bg-black h-full w-full opacity-50" />

          <div className="relative text-lg text-slate-50 max-w-3xl mx-auto py-7 md:py-10 px-5 md:p-0 text-center">
            The UVic environmental engineering club gives students a chance to
            develop their technical and networking skills through hands on
            learning, skill development workshops, and engineering conference
            events. Joining our team&apos;s administration is a great
            opportunity for those looking to take their project management and
            leadership skills to the next level.
          </div>
        </div>
      </section>

      <main id="team">
        <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
          <section id="admin">
            <div className="flex flex-col md:flex-row justify-start md:justify-evenly max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Administration
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
              </div>
              <ProfileCard name="Julia Jungwirth" position="Team Lead" />
              <ProfileCard name="Nathan Archibald" position="Project Manager" />
            </div>
          </section>

          <section id="special project">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Special Project
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className=" flex flex-col md:flex-row">
                  <div className="flex flex-col">
                    <ProfileCard
                      name="Xavier Agustines"
                      position="Special Project Lead"
                    />
                  </div>
                </div>
              </div>
              <Carousel slides={CarouselMap} />
            </div>
          </section>

          <section id="mechanical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Mechanical
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className="flex flex-col md:flex-row justify-around">
                  <ProfileCard
                    name="Mariana Latta Suazo"
                    position="Mechanical Lead"
                  />
                  <ProfileCard name="Eli Grant" position="Co-Lead" />
                </div>
              </div>
              <Carousel slides={CarouselMap} />
            </div>
          </section>

          <section id="electrical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Electrical
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
                <div className=" flex flex-col md:flex-row">
                  <ProfileCard
                    name="Michael Nicolaisen"
                    position="Electrical Lead"
                  />
                </div>
              </div>
              <Carousel slides={CarouselMap} />
            </div>
          </section>

          <section id="software">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Software
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  The software subsystem is in-charge of high-level programming,
                  data analysis, User Experience (UX), and cloud computing.
                </p>
                <div className=" flex flex-col md:flex-row">
                  <ProfileCard
                    name="Philip Esclamado"
                    position="Software Lead"
                  />
                </div>
              </div>
              <Carousel slides={CarouselMap} />
            </div>
          </section>

          <section id="advisor">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Advisor
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
              </div>
              <ProfileCard
                name="Dr. Caterina Valeo"
                position="Faculty Supervisor"
              />
            </div>
          </section>
        </div>
      </main>
    </BaseLayout>
  );
};

export default About;
