import React, {Component} from 'react';
import Link from 'next/link';
import './projectHover.css'

class ProjectHover extends Component {
    constructor(props) {
        super();
        this.state = {
            isHovering: false,
        }
    }
    handleMouseHover = () => {
        this.setState({ isHovering: true })
      }
      handleMouseOut = () => {
        this.setState({ isHovering: false })
      }

    render(){
        const { project, index } = this.props;
        return (
<div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseOut} className={this.state.isHovering ? "hovered" + " back" + index : "back" + index}>
    <div className="featured_content">
  <h3>{project.title + ' ' + index}</h3>
  </div>
  <style jsx>{`
  .${"back"+index} {
    background: linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ),url(${project.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
overflow: hidden;
position: relative;
}
.${"back"+index}:hover {
cursor:pointer;
}
  `}</style>
  <Link href="/contact">
  <div className="foverlay">
      <div className="foverlay_animate">
          <a href="/contact" target="_blank">+</a>
      </div>
  </div>
  </Link>
  </div>
        );
    }
}
export default ProjectHover;