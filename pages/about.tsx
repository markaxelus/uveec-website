import type { NextPage } from "next";
import { medium_lorem } from "../src/constants";
import { BaseLayout } from "../src/Layout/BaseLayout";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <BaseLayout>
      <div className="relative h-72 w-full">
        <Image
          layout="fill"
          src="/images/header3.jpg"
          className="object-cover blur-sm"
        />
        <div className="absolute bg-black h-full w-full opacity-50" />

        <div className="relative text-lg text-white max-w-3xl mx-auto py-14 md:py-24 px-5 md:p-0">
          {medium_lorem}
        </div>
      </div>

      <section id="admin">
        <div className="relative mx-auto my-28 w-96 md:w-[800px]">
          <div className="flex flex-col md:flex-row">
            <div className="text-center md:text-start flex flex-col justify-evenly">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight px-8">
                Administration
              </h2>
              <p className="text-slate-400 px-8 mt-4 max-w-3xl space-y-6">
                {medium_lorem}
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                  <div className="relative h-14 w-14">
                    <Image layout="fill" src="/images/user.png" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
                      Julia Jungwirth
                    </div>
                    <div className="text-slate-400 mt-0.5 text-sm leading-6">
                      Team Lead
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                  <div className="relative h-14 w-14">
                    <Image layout="fill" src="/images/user.png" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
                      Nathan Archibald
                    </div>
                    <div className="text-slate-400 mt-0.5 text-sm leading-6">
                      Project Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 relative h-[400px] w-full md:w-[900px]">
              <Image
                layout="fill"
                src="/images/manufacturing.jpg"
                className="object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="special project">
        <div className="relative mx-auto my-28 w-96 md:w-[800px]">
          <div className="flex flex-col md:flex-row">
            <div className="text-center md:text-start flex flex-col justify-evenly">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight px-8">
                Special Project
              </h2>
              <p className="text-slate-400 px-8 mt-4 max-w-3xl space-y-6">
                {medium_lorem}
              </p>
              <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                <div className="relative h-14 w-14">
                  <Image layout="fill" src="/images/user.png" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold dark:text-white">
                    Xavier Agustines
                  </div>
                  <div className="text-slate-400 mt-0.5 text-sm leading-6">
                    Special Project Lead
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 relative h-[400px] w-full md:w-[900px] overflow-hidden">
              <Image
                layout="fill"
                src="/images/manufacturing.jpg"
                className="object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mechanical">
        <div className="relative mx-auto my-28 w-96 md:w-[800px]">
          <div className="flex flex-col md:flex-row">
            <div className="text-center md:text-start flex flex-col justify-evenly">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight px-8">
                Mechanical
              </h2>
              <p className="text-slate-400 px-8 mt-4 max-w-3xl space-y-6">
                {medium_lorem}
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                  <div className="relative h-14 w-14">
                    <Image layout="fill" src="/images/user.png" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
                      Mariana Latta Suazo
                    </div>
                    <div className="text-slate-400 mt-0.5 text-sm leading-6">
                      Mechanical Lead
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                  <div className="relative h-14 w-14">
                    <Image layout="fill" src="/images/user.png" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold dark:text-white">
                      Eli Grant
                    </div>
                    <div className="text-slate-400 mt-0.5 text-sm leading-6">
                      Mechanical Co-Lead
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 relative h-[400px] w-full md:w-[900px]">
              <Image
                layout="fill"
                src="/images/manufacturing.jpg"
                className="object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="electrical">
        <div className="relative mx-auto my-28 w-96 md:w-[800px]">
          <div className="flex flex-col md:flex-row">
            <div className="text-center md:text-start flex flex-col justify-evenly">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight px-8">
                Electrical
              </h2>
              <p className="text-slate-400 px-8 mt-4 max-w-3xl space-y-6">
                {medium_lorem}
              </p>
              <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                <div className="relative h-14 w-14">
                  <Image layout="fill" src="/images/user.png" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold dark:text-white">
                    Michael Nicolaisen
                  </div>
                  <div className="text-slate-400 mt-0.5 text-sm leading-6">
                    Electrical Lead
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 relative h-[400px] w-full md:w-[900px] overflow-hidden">
              <Image
                layout="fill"
                src="/images/manufacturing.jpg"
                className="object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="software">
        <div className="relative mx-auto my-28 w-96 md:w-[800px]">
          <div className="flex flex-col md:flex-row">
            <div className="text-center md:text-start flex flex-col justify-evenly">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight px-8">
                Software
              </h2>
              <p className="text-slate-400 px-8 mt-4 max-w-3xl space-y-6">
                {medium_lorem}
              </p>
              <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                <div className="relative h-14 w-14">
                  <Image layout="fill" src="/images/user.png" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold dark:text-white">
                    Philip Esclamado
                  </div>
                  <div className="text-slate-400 mt-0.5 text-sm leading-6">
                    Software Lead
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 relative h-[400px] w-full md:w-[900px] overflow-hidden">
              <Image
                layout="fill"
                src="/images/manufacturing.jpg"
                className="object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advisor">
        <div className="relative mx-auto my-28 w-96 md:w-[800px]">
          <div className="flex flex-col md:flex-row">
            <div className="text-center md:text-start flex flex-col justify-evenly">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight px-8">
                Advisor
              </h2>
              <p className="text-slate-400 px-8 mt-4 max-w-3xl space-y-6">
                {medium_lorem}
              </p>
              <div className="flex flex-row justify-around mx-auto mt-4 h-auto w-52">
                <div className="relative h-14 w-14">
                  <Image layout="fill" src="/images/user.png" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold dark:text-white">
                    Dr. Valeo
                  </div>
                  <div className="text-slate-400 mt-0.5 text-sm leading-6">
                    Faculty Supervisor
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 relative h-[400px] w-full md:w-[900px] overflow-hidden">
              <Image
                layout="fill"
                src="/images/manufacturing.jpg"
                className="object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default About;
