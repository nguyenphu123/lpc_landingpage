"use client";
import BannerContent from "./bannerContent";
import { motion } from "framer-motion";
const banner = () => {
  return (
    <section className="relative bg-[url(https://res.cloudinary.com/derjssgq9/image/upload/v1690527395/banner5_w8mjkg.jpg)] bg-cover bg-center bg-no-repeat ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delayChildren: 1,
        }}
      >
        <BannerContent />
      </motion.div>
    </section>
  );
};
export default banner;
