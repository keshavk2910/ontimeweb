import { WorkTop, FeaturedTitle } from '../styles/workStyles';
import ProjectHoverCon from "../components/ProjectHover/ProjectHover.container";
import { projects } from "../data";

const Work = () => {
  return (
    <>
      <WorkTop bgimg="https://ik.imagekit.io/zkvrzayer06/tr:f-auto,q-50/jorge-vasconez-buYlndcNnjM-unsplash_nZLKOZCj-.jpg">
        <div>
          <h1>Our Work</h1>
        </div>
      </WorkTop>
      <section id="work">
        <FeaturedTitle>
          <h2>Recent Projects</h2>
        </FeaturedTitle>
        <ProjectHoverCon projects={projects} />
      </section>
    </>
  );
};
export default Work;
