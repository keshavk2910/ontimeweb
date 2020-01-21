import BlogComp from './BlogSection.component';
import { InView } from 'react-intersection-observer'
import './BlogSection.css';

const BlogCon = ({posts}) => {
    return(
        <div className="blogSection_wrap">
       { posts.map((post,index) => 
        <InView triggerOnce={true} threshold="0.4" key={index} rootMargin="-80px 0px 0px 0px">
        {({ inView, ref }) => (
        <div className="blogwarp" ref={ref}>
        <BlogComp key={index} post={post} inView={inView}/>
        </div>
        )}
        </InView>
        )}
        </div>
    );
}
export default BlogCon;