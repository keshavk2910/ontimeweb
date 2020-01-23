import fetch from 'isomorphic-unfetch';

const SingleBlog = ({post}) => {
    return(
        <p>My Blog Post: {post.id}</p>
    );
}
SingleBlog.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://backend.ontimewebservices.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
    const data = await res.json();
    return { post:data[0]}
    
  };
export default SingleBlog;