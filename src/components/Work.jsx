import React from "react";
import { motion } from "framer-motion";

const Work = ({
  dataTitle,
  image,
  github,
  page,
  loadingIcon,
  githubIcon,
  viewIcon,
  loading,
  githubHref,
  pageHref,
}) => {
  return (
    <>
      <div className="image" data-title={dataTitle}>
        <img src={image} alt="" />
        <div className="button-container">
          {github && (
            <motion.a
              href={githubHref}
              target="_blank"
              className="button"
              whileHover={{
                scale: 1.1,
              }}
            >
              {githubIcon}
            </motion.a>
          )}
          {page && (
            <motion.a
              href={pageHref}
              target="_blank"
              className="button"
              whileHover={{
                scale: 1.1,
              }}
            >
              {viewIcon}
            </motion.a>
          )}
          {loading && (
            <motion.div
              className="button"
              animate={{
                rotate: 360,
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            >
              {loadingIcon}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Work;
