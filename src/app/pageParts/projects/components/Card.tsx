import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeroImg from "../../../images/blogImg.png";
import "devicon/devicon.min.css";
import { FiExternalLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ProjectCard() {
  return (
    <>
      <CardContainer className="inter-var mx-4">
        <CardBody className="bg-neutral-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[50rem] h-auto xl:h-[rem] rounded-xl p-6 border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100  ">
          <CardItem translateZ="50" className="text-2xl font-bold text-white ">
            SkyAdventure - Blog
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className=" text-lg  mt-2 text-neutral-100"
          >
            SSG blog website. Uses headless CMS as backend which allows the
            client to add, edit, and delete blog posts on their own.
          </CardItem>
          <CardItem>
            <span className="mb-2 flex items-center text-sm font-semibold my-4">
              <ul className="flex flex-wrap gap-2 md:gap-2  ">
                <li className="flex text-[0.75rem] md:text-[0.9rem] items-center gap-2 py-1 px-1 md:px-3 rounded-xl text-white bg-[#5A2094]  select-none ">
                  <i className="text-white devicon-nextjs-original-wordmark"></i>
                  <span>Nextjs</span>
                </li>
                <li className="flex text-[0.75rem] md:text-[0.9rem] items-center gap-2 py-1 px-1 md:px-3 rounded-xl text-white bg-[#5A2094]  select-none ">
                  <i className="text-white devicon-typescript-plain"></i>
                  <span>Typescript</span>
                </li>
                <li className="flex text-[0.75rem] md:text-[0.9rem] items-center gap-2 py-1 px-1 md:px-3 rounded-xl text-white bg-[#5A2094]  select-none ">
                  <i className="text-white devicon-graphql-plain"></i>
                  <span>GraphQL</span>
                </li>
                <li className="flex text-[0.75rem] md:text-[0.9rem] items-center gap-2 py-1 px-1 md:px-3 rounded-xl text-white bg-[#5A2094]  select-none ">
                  <i className="text-white devicon-postgresql-plain"></i>
                  <span>PostgreSQL</span>
                </li>
                <li className="flex text-[0.75rem] md:text-[0.9rem] items-center gap-2 py-1 px-1 md:px-3 rounded-xl text-white bg-[#5A2094]  select-none ">
                  <i className="text-white devicon-tailwindcss-plain"></i>
                  <span>Tailwind</span>
                </li>
                <li className="flex items-center  select-none gap-2 py-1 px-3 rounded-xl text-white bg-[#5A2094] text-[0.75rem] md:text-[0.9rem] ">
                  {/* <Image src="./assets/strapi.svg" alt="icon for strapi" className=" w-[12px]"/> */}
                  <span>Strapi</span>
                </li>
              </ul>
            </span>
          </CardItem>
          <CardItem translateZ="40" className="w-full mt-4">
            <Image
              src={HeroImg}
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl  "
              alt="thumbnail"
            />
          </CardItem>
          <div className="">
            <CardItem translateZ={20} className="w-full">
              <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-center mt-8">
                <Link
                  className="bg-[#5A2094] hover:scale-105 hover:transition hover:ease-in-out hover:bg-[#2826b0] duration-300 w-full text-white rounded-xl py-1.5 px-5  font-bold text-[0.9rem] text-center md:text-[1rem] whitespace-nowrap flex justify-center items-center gap-2"
                  href={"https://master--skyadventure.netlify.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> View Project
                </Link>
                <Link
                  className="bg-[#5A2094] hover:scale-105 hover:transition hover:ease-in-out hover:bg-[#2826b0] duration-300  w-full text-white text-center rounded-xl py-1.5 px-5  font-bold text-[0.9rem] md:text-[1rem]  flex  whitespace-nowrap justify-center items-center gap-2"
                  href={"https://github.com/Strjela/blog-project-next"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiCodeAlt /> View Code
                </Link>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
