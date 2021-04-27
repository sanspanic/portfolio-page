import React from "react";
import WomanSchool from "../SVGs/WomanSchool";
import WomanDirections from "../SVGs/WomanDirections";
import { Briefcase, Target } from "phosphor-react";

const Timeline = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-20 pb-40 sm:pb-20 mx-auto">
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-purple inline-flex items-center justify-center text-white relative z-10">
                {/*                 <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg> */}
                <Briefcase size={24} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  <span className="highlight font-open">EARLY CAREER</span>
                </h2>
                <p className="leading-relaxed bg-faded-white rounded-full">
                  Having worked in the human-centric industries of mental health
                  and the arts has imbued me with empathy, grit, a team-first
                  mindset and an appreciation for the complexity each individual
                  holds. I'm particularly interested in how we interact with
                  technology, as well as technology's intended and unintended
                  consequences.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-purple inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  <span className="highlight font-open">CAREER TRANSITION</span>
                </h2>
                <p className="leading-relaxed bg-faded-white rounded-full">
                  I taught myself Python, JavaScript and the basics of web
                  development via online courses from Udemy. I also completed
                  Springboard's 9-month software engineering bootcamp focusing
                  on JavaScript, Python, Flask, SQL, Node, Express, React &
                  Redux.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-purple inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  <span className="highlight font-open">FIRST TECH JOB</span>
                </h2>
                <p className="leading-relaxed bg-faded-white rounded-full">
                  I was fortunate enough to be hired by Trustpilot as Software
                  Eningeer I. As part of the Data, Analytics and Architecture
                  team, I work on cloud-based infrastructure and scalable data
                  integrations solutions.
                </p>
              </div>
            </div>
            {/*             <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-purple inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 4
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div> */}
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-purple inline-flex items-center justify-center text-white relative z-10">
                {/*                 <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg> */}
                <Target size={24} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  <span className="highlight font-open">THE FUTURE</span>
                </h2>
                <p className="leading-relaxed bg-faded-white rounded-full">
                  First and foremost, I want to focus on learning as much as I
                  can in the coming year to be able to add value to my team.
                  Because my current role is largely backend-focused, I want to
                  devote any spare time I might have left to perfecting my
                  frontend skills and continuing to create beautiful,
                  interactive UIs with React.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
            <WomanSchool className="bg-faded-white rounded-full" />
            {/*             <WomanDirections /> */}
          </div>
          {/*           <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/1200x500"
            alt="step"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
