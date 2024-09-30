"use client";

import MyParticles from "../about/components/particles";
import Image from "next/image";
import wave from "../../images/b2.svg";
import { ProjectCard } from "./components/Card";
import { projectTitle, projectDescription } from "../../helpers/animations";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div className="bg-gray-900 h-screen w-full relative ">
        {/* Gradient Background */}
        <div className="absolute   inset-0 z-10 h-[250px] bg-gradient-to-b from-[#232425] to-transparent"></div>
        <div className="absolute  left-0 right-0 h-[250px] z-10 bg-gradient-to-b from-transparent to-[#232425] bottom-0"></div>

        <div className="absolute w-screen h-screen inset-0 z-0">
          <Image
            src={wave}
            alt="wave"
            className="w-full h-full object-cover "
          />
        </div>

        <div className=" z-50 relative  flex max-w-[1400px] mx-auto  ">
          <motion.p
            variants={projectTitle}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="font-bold text-5xl text-white my-20 ml-4 "
          >
            Feature Projects
          </motion.p>
        </div>

        <motion.div
          variants={projectDescription}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-20"
        >
          <ProjectCard />
        </motion.div>
      </div>
    </>
  );
}
