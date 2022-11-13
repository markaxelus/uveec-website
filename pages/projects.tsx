import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import { medium_lorem } from "../src/constants";

const Projects: NextPage = () => {
  return (
    <BaseLayout>
      <main>
        <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
          <section id="usv">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
              <div className="flex flex-col">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Unmanned Surface Vehicle
                </h2>
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  {medium_lorem}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Projects;
