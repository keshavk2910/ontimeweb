import fetch from 'isomorphic-unfetch';
import BlogCon from "../components/BlogSection/BlogSection.container";
import Container from "@material-ui/core/Container";
import './blog.scss';
import {useState, useEffect} from 'react';
import {withRouter} from 'next/router';
import AwesomeButton from "../components/AwesomeButton/AwesomeButton";

const Blog = ({posts, router, per_page, totalProducts}) => {
  const [per, setPer]= useState();
  const [loading, setLoading]= useState(false);
  const [changed, setChanged]= useState(false);

  let loadMore = () => {
    setPer(per+3)
    setChanged(true)
    setLoading(true)
  }
  useEffect(() => {
    if(per>12){
      router.push(`/blog?per=${per}`)
    }
  }, [per]);

  useEffect(() => {
    if(per_page == undefined) {
      setPer(12)
    } else {
      setPer(Number(per_page))
    }
  }, []);

  useEffect(() => {
    setLoading(false)
    if(posts.length>12 && changed) {
      window.scrollBy({
        top:550,
        behavior: 'smooth'
      });
    } 
  }, [posts]);

    return(<>
      <div className="blogTop">
      <div className="content">
        <h1>Ontime Blog</h1>
      </div>
    </div>
    <section id="blogPage">
        <Container fixed>
        <BlogCon posts={posts}/>
        {per_page<totalProducts ? <div id="loadMore"><AwesomeButton loading={loading} text="Load More" onClick={loadMore}/></div>
        : 
        <div id="loadMore"><div>No More Posts. Thats all for now :)</div></div>}
        </Container>
        </section>
    </>);
}
Blog.getInitialProps = async function(context) {
  let { per } = context.query; 
    let res;
    let per_page;
     if(per !== undefined) {
      per_page = per;
      res = await fetch(`https://backend.ontimewebservices.com/wp-json/wp/v2/posts?_embed&per_page=${per}`)
     } else {
      per_page = 12;
      res = await fetch("https://backend.ontimewebservices.com/wp-json/wp/v2/posts?_embed&per_page=12")
     }
    const data = await res.json();
    const items = await res.headers.get('X-WP-Total');
    return { posts: data, per_page, totalProducts:items };
  };
export default withRouter(Blog);