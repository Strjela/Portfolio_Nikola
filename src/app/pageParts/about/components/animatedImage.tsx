"use client";

import Image from "next/image";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import aboutImg from "../../../images/file.png";
import tsIcon from "../icons/tsIcon.svg";
import gitIcon from "../icons/gitIcon.svg";
import tailwIcon from "../icons/taillwindIcon.svg";
import reduxIcon from "../icons/reduxIcon.svg";
import strapiIcon from "../icons/strapiIcon.svg";
import reactIcon from "../icons/reactIcon.svg";
import jsIcon from "../icons/jsIcon.svg";
import awsIcon from "../icons/awsIcon.svg";

import useWindowSize from "@/app/hooks/useWindowSize";

export default function AnimatedAboutImage() {
  const result = useWindowSize();

  const radiusSize = () => (result.width > 1400 ? 250 : 150);

  return (
    <>
      <div className="relative flex h-[400px] md:h-[800px] lg:h-[1000px] w-full flex-col items-center justify-center bg-background animate-custom-alternate z-20">
        {/* Main Image Container */}

        <Image
          src={aboutImg}
          width={500}
          height={500}
          priority
          alt="Picture of the author"
          className="xl:w-[35vw] h-auto "
          style={{ width: "100%", height: "auto" }}
        />

        {/* Orbiting Circles */}
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={7.5}
          radius={radiusSize()}
        >
          <Image src={reactIcon} alt="React Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={6}
          radius={radiusSize()}
        >
          <Image src={tsIcon} alt="TypeScript Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={4.5}
          radius={radiusSize()}
        >
          <Image src={strapiIcon} alt="Strapi Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={3}
          radius={radiusSize()}
        >
          <Image src={reduxIcon} alt="Redux Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={1.5}
          radius={radiusSize()}
        >
          <Image src={tailwIcon} alt="TailwindCSS Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={0}
          radius={radiusSize()}
        >
          <Image src={gitIcon} alt="Git Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={9}
          radius={radiusSize()}
        >
          <Image src={jsIcon} alt="JavaScript Icon" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-12 md:size-16 border-none"
          duration={12}
          delay={10.5}
          radius={radiusSize()}
        >
          <Image src={awsIcon} alt="AWS Icon" />
        </OrbitingCircles>
      </div>
    </>
  );
}
