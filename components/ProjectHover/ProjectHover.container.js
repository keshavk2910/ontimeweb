import ProjectHover from './ProjectHover.js';

const ProjectHoverCon = ({projects}) => {
    return (
        <div className="featured-projects">
        {projects.map((project, index) => 
            <ProjectHover key={index} project={project} index={index} />
            )}
            </div>
    );
}
export default ProjectHoverCon;