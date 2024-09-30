import Meteors from "@/components/magicui/meteors";
import { motion } from "framer-motion";
import Form from "./components/form";
import { contactTitle } from "../../helpers/animations";

export default function Contact() {
  return (
    <>
      <div className="bg-contact bg-center bg-cover h-screen w-screen bg-no-repeat relative meteor">
        <Meteors />
        <div className="absolute top-0 left-0 right-0 h-[250px] z-10 bg-gradient-to-b from-[#232425] to-transparent"></div>
        <div className="flex flex-col justify-center items-center mx-auto w-screen h-full md:h-screen">
          <motion.h3
            variants={contactTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[2rem] md:text-5xl text-white font-bold mb-2"
          >
            Like what you see?
          </motion.h3>
          <Form />
        </div>
      </div>
    </>
  );
}
