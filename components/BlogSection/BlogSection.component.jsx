import ProgressiveImage from '../ProgressiveImage';
import Link from 'next/link';

const BlogComp = ({post, inView}) => {
    let cloudurl = 'https://ik.imagekit.io/zkvrzayer06/tr:w-20,h-20/'
    let cloudurlbig = 'https://ik.imagekit.io/zkvrzayer06/tr:w-470,h-314/'
    const toShow = post.content.rendered.substring(0,300)+"...";
    let url = post._embedded['wp:featuredmedia']['0'].media_details.file;
    let filename = '/wp-content/uploads/'+url;
    
    return(<Link href="/blog/[id]" as={`blog/${post.slug}`}><a className="single">
            <div className="single-featured_image">
        {url ?
        inView ? <ProgressiveImage
              alt={post.title.rendered}
              preview={cloudurl+filename}
              image={cloudurlbig+filename}
            /> : <div className="bdiv"/>
        : null}
            </div>
            <div className="single-blogContent">
                <h4 className="single-blogTitle">{post.title.rendered}</h4>
                <div dangerouslySetInnerHTML={{ __html: toShow }} />
            </div>
            </a>
            </Link>
    );
}
export default BlogComp;