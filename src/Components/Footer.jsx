import React from "react";
import "../Styles/Footer.css";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        class=" footerlinks flex flex-row ml-20 gap-14 mt-16 ..."
      >
        <div className="">Instagram</div>
        <div>Facebook</div>
        <div>Linkedin</div>
        <div>Twitter</div>
        <div>Youtube</div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" last ml-20 mt-5"
      >
        © 2024 by Karthik Mahadev. All rights reserved.{" "}
      </motion.p>
      <br></br>

      <br></br>
      <br></br>
    </>
  );
};

export default Footer;
