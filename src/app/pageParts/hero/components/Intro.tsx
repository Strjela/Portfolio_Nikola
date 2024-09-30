"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../images/heroImg.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

import {
  titleAnimation,
  subTitleAnimation,
  paragraphAnimation,
  buttonAnimation,
  heroImgAnimation,
} from "../../../helpers/animations";

export default function Intro({
  handlePageChange,
}: {
  handlePageChange: (page: number) => void;
}) {
  function onClickChangePage(item: number) {
    handlePageChange(item);
  }
  return (
    <>
      <div className="max-w-[1400px] flex items-center  justify-center md:justify-between  flex-col xl:flex-row  mr-auto ml-auto overflow-visible">
        <div className="flex flex-col justify-center m-6">
          <div className="text-white ">
            <motion.h1
              variants={titleAnimation}
              initial="hidden"
              animate="visible"
              className="text-[2rem] md:text-[3rem] uppercase font-extrabold leading-[40px] md:leading-[50px] "
            >
              Turn your ideas
              <br />{" "}
              <motion.span
                variants={subTitleAnimation}
                initial="hidden"
                animate="visible"
              >
                into reality
              </motion.span>
            </motion.h1>
            <motion.p
              variants={paragraphAnimation}
              initial="hidden"
              animate="visible"
              className="text-[1.7rem] md:text-[2rem] mt-2 font-light leading-[30px] md:leading-10 tracking-wide  "
            >
              You just need to take the first step.
            </motion.p>
          </div>
          <div>
            <motion.div
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
              className="flex gap-3 md:gap-5 flex-col md:flex-row md:p-0 px-0  justify-center items-center w-full md:w-[28em] mt-8 font-semibold text-[1.2rem]"
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#5A2094",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onClickChangePage(2)}
                className="bg-[#5A2094]  py-2 px-5 text-white w-full tracking-wider rounded-xl"
              >
                SEE MY WORK
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#40176A",
                  transition: { duration: 0.3 },
                }}
                onClick={() => onClickChangePage(3)}
                whileTap={{ scale: 0.95 }}
                className="bg-[#40176A] py-2 px-5 text-white w-full tracking-wider rounded-xl"
              >
                HIRE ME
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={heroImgAnimation}
          initial="hidden"
          animate="visible"
          className="relative w-full h-[400px] md:h-[520px] xl:h-[800px]  overflow-visible"
        >
          <Canvas className="h-full w-full max-w-5xl">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#712ab8"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image
            src={heroImg}
            width={500}
            height={500}
            priority
            alt="Picture of the author"
            className="animate-custom-alternate absolute top-0 left-0 right-0 bottom-12 m-auto object-contain xl:w-4/6 h-auto w-auto"
          />
        </motion.div>
      </div>
    </>
  );
}
