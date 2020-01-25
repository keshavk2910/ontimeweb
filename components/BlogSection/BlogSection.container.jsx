import BlogComp from './BlogSection.component';
import './BlogSection.scss';

const BlogCon = ({posts, page}) => {
    return(
        <div className="blog_list">
        <div className="blogSection_wrap">
       { posts.map((post,index) => 
        <div key={index} className="singleBlog">
        <BlogComp post={post} page={page} index={index}/>
        </div>
        )}
        </div>
        </div>
    );
}
export default BlogCon;