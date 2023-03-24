import type { NextPage } from "next";
import { medium_lorem, CarouselMapSpecialProject, CarouselMapMechanical, CarouselMapElectrical, CarouselMapSoftware } from "../src/constants";
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
                        <div className="flex flex-col">
                            <h2 className="mt-4 text-3xl text-center sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                TEAM CAPTAINS
                            </h2>
                        </div>
                        <div className="flex flex-col md:flex-row justify-start md:justify-evenly max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="flex flex-col">
                                <h2 className="mt-4 sm:text-xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Team Captain - Administration- Julia Jungwirth 
                                </h2>
                                <div className="space-x-6">
                                    <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                        <li>Julia is a third year civil engineering student who is passionate about using engineering tools to address sustainability and waste reduction issues. She currently has a co-op in the MiNa lab at UVic researching microplastic detection methods, and has in the past written proposals and reports promoting environmental conservation and sustainability</li>
                                        <li>Julia's roles are mainly finances and administration, and she tried to be active on the filteration/special projects subsystem team as well</li>
                                    </ul>
                                </div>
                            </div>
                            <ProfileCard name="Julia Jungwirth" position="Team Lead" />
                            <ProfileCard name="Nathan Archibald" position="Project Manager" />
                            <div className="flex flex-col">
                                <h2 className="mt-4 sm:text-xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Team Captain - Technical Project Manager - Nathan Archibald 
                                </h2>
                                <div className="space-x-6">
                                    <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                        <li>Nathan Archibald is a 4th year mechanical engineering student who is excited to help humanity become more sustainable through advancements in the areas of agricultural engineering and renewable energy</li>
                                        <li>Nathan is the technical project manager, so he is in charge of tracking all the sub projects within each subsystem, ensuring that the project runs smoothly </li>
                                        <li>He also works alongside his co-captain, Julia, to handle all administrative tasks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Special Project">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Special Project
                                </h2>
                                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                                    The Filtration subsystem is responsible for developing the microbubble technology that will filter and collect microplastics from ocean water. This technology has the main goals of collecting plastic without harming marine life or creating excessive drag in a way that a conventional filter/net could not. 
                                </p>
                                <div className=" flex flex-col md:flex-row">
                                    <div className="flex flex-col">
                                        <ProfileCard
                                            name="Xavier Agustines"
                                            position="Filtration Lead"
                                        />
                                    </div>
                                    <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                        <li>Xavier is a second year civil engineering student originally from the Philippines, where he witnessed the effects of environmental degradation firsthand. He has a keen interest in the many facets of sustainable development, from the technical to the political angle</li>
                                        <li>When he first got involved with UVEEC in year 1, Xavier wanted to learn how engineering could be used to advance sustainable development. Now, as the Special Project Lead, he hopes to give others the same opportunity</li>
                                    </ul>
                                </div>
                            </div>
                            <Carousel slides={CarouselMapSpecialProject} />
                        </div>
                    </section>

                    <section id="mechanical">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Mechanical
                                </h2>
                                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                                    The mechanical team is responsible for the design and manufacturing of the catamaran boat that the microplastic filtration module will be mounted on. They are also working to develop a testing channel that will be used by the filtration team.
                                    Eli and Marianna are co-leading the mechanical team and work hard to build-up the technical skills of the members in their subsection

                                </p>
                                <div className="flex flex-col md:flex-row justify-around">
                                    <div className="flex space-x-6">
                                        <ProfileCard name="Mariana Latta Suazo" position="Mechanical Lead" />
                                        <div className="space-x-6">
                                            <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                                <li>Mariana is a 3rd year Mechanical engineering student who is hoping to combine her passion for engineering and the environment to help develop sustainable solutions to real world problems</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex space-x-6">
                                        <ProfileCard name="Eli Grant" position="Co-Lead" />
                                        <div className="space-x-6">
                                            <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                                <li>Eli is a 3rd year mechanical engineering student who is hoping to use and develop his engineering skills to work in the field of environmentally sustainable engineering</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Carousel slides={CarouselMapMechanical} />
                        </div>
                    </section>

                    <section id="electrical">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Electrical
                                </h2>
                                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                                    The electrical team's role in this project can be divided into two main categories: hardware and firmware. The hardware side of the team is responsible for power management and distribution, which includes assembling the battery and its management system, designing the system that monitors output currents, and creating waterproof connections to deliver power where it's needed on the boat. The firmware team focuses on connecting sensor data and the software team's autonomous driving. This includes parsing data from all the boat's sensors and communicating with a Raspberry Pi, as well as controlling the motor and rudder as per instructions received from the Pi. The firmware team has also facilitated a first person camera and radio control override as a backup to the Pi. 
                                </p>
                                <div className=" flex flex-col md:flex-row">
                                    <div className="flex space-x-6">
                                        <ProfileCard
                                            name="Michael Nicolaisen"
                                            position="Electrical Lead"
                                        />
                                        <div className="space-x-6">
                                            <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                                <li>Michael is a 2nd year electrical engineering student who looks to apply his technical and team skills to advance projects related to sustainability and the fight against the deteriorating climate </li>
                                                <li>Michael's interests extends to math, physics, and hydrogen fusion</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex space-x-6">
                                        <ProfileCard
                                            name="Evan Peters"
                                            position="Electrical Lead"
                                        />
                                        <div className="space-x-6">
                                            <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                                <li>Evan is a 3rd year electrical engineering student with a passion for PCB design and microcontroller programming</li>
                                                <li>His previous co-op positions at Urban Solar and BC Hydro have given him a solid understanding of sustainable electrical design practices, and he hopes to expand and share these concepts through UVEEC's future projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Carousel slides={CarouselMapElectrical} />
                        </div>
                    </section>

                    <section id="software">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-y-10 md:space-x-10">
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Software
                                </h2>
                                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                                    The software subsystem is in charge of high-level programming, data analysis, User Experience (UX), and cloud computing. The team takes on an array of tasks including algorithm development, control system design, telemetry, and web development. Algorithm development involves designing and implementing algorithms that can be used to solve specific problems. Control system design involves designing and implementing software systems that can be used to control hardware systems. Telemetry involves developing software systems that can be used to collect data from remote locations. Web development involves designing and implementing websites that can be used to communicate with members and the community.

                                </p>
                                <div className=" flex flex-col md:flex-row">
                                    <ProfileCard
                                        name="Philip Esclamado"
                                        position="Software Lead"
                                    />
                                    <div className="space-x-6">
                                        <ul className="list-disc text-slate-400 mt-4 max-w-3xl space-y-6">
                                            <li>Phillip is a second-year undergrad pursuing software engineering</li>
                                            <li>He is a past junior full-stack engineer for University of Victoria's Environmental Engineering Club (UVEEC)</li>
                                            <li>Philip's interests include: mathematics (multilinear relationship, quasilinear forms, multidimensional discrete convolution), neural networks (blind signal separation, sequential decision making)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Carousel slides={CarouselMapSoftware} />
                        </div>
                    </section>

                    <section id="advisor">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row space-x-4">
                            <div>
                                <ProfileCard
                                name="Dr. Caterina Valeo"
                                position="Faculty Supervisor"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                                    Faculty Representative - Dr. Caterina Valeo
                                </h2>
                                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                                    Dr. Valeo has served as the club's Faculty representative at UVic since the beginning of the club in the Fall of 2021. Dr. Valeo is a professor in the faculty of mechanical engineering, and runs the Valeo Research Laboratory. Her areas of expertise include forested regions, sustainable urban development of water resources, climate change impacts and analysis using artificial neural networks, pollutant dispersion modeling in rivers and nearshore regions. Her eagerness to help, many years of research in the field, and wide range of knowledge in the marine/ environmental conservation department makes her a tremendous asset to the project. 
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </BaseLayout>
    );
};

export default About;
