import { motion } from "framer-motion";
import "../styles/work.scss";
import Container from "@material-ui/core/Container";
import ProjectHoverCon from "../components/ProjectHover/ProjectHover.container";
import { projects } from "../data";

const Work = () => {
  return (
    <>
      <div className="workTop">
        <motion.div
          animate={{
            opacity: 1,
            y: "0%",
            transition: {
              duration: 0.4
            }
          }}
          initial={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }
          }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }
          }}
          className="content"
        >
          <h1>Our Work</h1>
        </motion.div>
      </div>
      <section id="work">
        <div className="featured_title">
          <h2>Recent Projects</h2>
        </div>
        <ProjectHoverCon projects={projects} />
      </section>
    </>
  );
};
export default Work;
