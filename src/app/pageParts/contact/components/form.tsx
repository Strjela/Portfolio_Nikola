"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { RiMailSendLine, RiCheckboxCircleLine } from "react-icons/ri";
import InputField from "./InputField";
import { formAnimation } from "../../../helpers/animations";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qxvp0y9", "template_9asyjvq", form.current!, {
        publicKey: "wK8_6Jc34NoIhwRVV",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 2000);
        },
        (error) => {
          console.error("Error sending email: ", error);
        }
      );
  };

  return (
    <>
      <motion.form
        variants={formAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendEmail}
        className="flex sm:w-[30em] bg-white flex-col space-y-5 rounded-2xl mt-5 mx-4 py-7 px-5 shadow-xl opacity-100"
      >
        <p className="text-[#5A2094] text-3xl font-medium">
          Send me a message.
        </p>
        <InputField
          id={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputName={"user_name"}
          labelFor={"name"}
          labelText={"Enter Your Name"}
          pattern="^[a-zA-Z ]{2,30}$"
        />
        <InputField
          id={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputName={"user_email"}
          labelFor={"email"}
          labelText={"Enter Your Email"}
        />
        <InputField
          id={"textarea"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          inputName={"message"}
          labelFor={"textarea"}
          labelText={"Enter Your Message"}
          inputType={"textarea"}
          pattern="^[a-zA-Z ]{2,30}$"
        />
        <button className="rounded-lg bg-[#5A2094] hover:bg-[#2826b0] transition duration-300 py-3 font-bold text-white flex justify-center items-center gap-2">
          Send <RiMailSendLine />
        </button>
      </motion.form>

      {/* Success message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="flex items-center justify-center mt-5 p-4 bg-green-100 text-green-700 rounded-lg shadow-lg"
        >
          <RiCheckboxCircleLine className="text-2xl mr-2" />
          <span className="font-semibold">Email sent successfully!</span>
        </motion.div>
      )}
    </>
  );
};

export default Form;
