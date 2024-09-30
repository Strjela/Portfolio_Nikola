import AnimatedAboutImage from "./components/animatedImage";
import { motion } from "framer-motion";
import MyParticles from "./components/particles";
import { aboutMeParagraph } from "../../helpers/animations";

export default function About() {
  return (
    <>
      <div className="relative bg-gray-900 h-screen w-full">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <MyParticles />
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto flex  items-center flex-col md:flex-row md:justify-around xl:justify-between h-full">
          <div>
            <AnimatedAboutImage />
          </div>

          {/* Right content */}
          <motion.div
            variants={aboutMeParagraph}
            initial="hidden"
            whileInView="visible"
            className="mx-4"
          >
            <h2 className="text-[2rem] md:text-5xl font-bold text-white pt-10 mt-4 mb-4">
              Why me?
            </h2>
            <p className="text-white max-w-xl text-[1rem] md:text-[1.2rem] mb-10 md:mb-0">
              I'm a front-end developer with a solid foundation in design,
              driven by a passion for crafting visually appealing and highly
              functional websites. I'm constantly seeking fresh challenges and
              opportunities to enhance my skills and continue growing.
              <br />
              <br />
              <span className="text-[#F9A826] font-bold tracking-wider">
                Development:
              </span>{" "}
              TypeScript, React, Next.js, Redux, TailwindCSS, SASS, Firebase,
              Strapi, Framer Motion, Git, Webpack, Docker.
            </p>
          </motion.div>
        </div>

        {/* Gradient layer */}
        <div className="absolute   inset-0 z-10 h-[250px] bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute  left-0 right-0 h-[150px] z-10 bg-gradient-to-b from-transparent to-[#232425] bottom-0"></div>
      </div>
    </>
  );
}
