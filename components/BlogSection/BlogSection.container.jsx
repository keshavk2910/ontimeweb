import BlogComp from './BlogSection.component';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './BlogSection.scss';

const BlogCon = ({posts, delay}) => {
    return(
        <div className="blog_list">
        <div className="blogSection_wrap">
       { posts.map((post,index) => 
        <InView triggerOnce={true} threshold="0.4" key={index} rootMargin="-80px 0px 0px 0px">
        {({ inView, ref }) => (
        <div className="singleBlog" ref={ref}>
            <motion.div 
        animate={inView && delay ? {
        opacity: 1,
        y: '0%',
        transition: { 
        duration: 0.4,
        delay: index * 0.05}
        }
    : inView ? {
      opacity: 1,
      y: '0%',
      transition: { 
      duration: 0.8}
    } : ""} 

     initial={{ y: '50%', opacity: 0, transition:{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}} 

      exit={{ y: '50%', opacity: 0, transition:{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      } }} >
        <BlogComp key={index} post={post} inView={inView}/>
        </motion.div>
        </div>
        )}
        </InView>
        , delay)}
        </div>
        </div>
    );
}
export default BlogCon;