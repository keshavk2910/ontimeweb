import fetch from 'isomorphic-unfetch';
import BlogCon from "../components/BlogSection/BlogSection.container";
import Container from "@material-ui/core/Container";
import {useState, useEffect} from 'react';
import {withRouter} from 'next/router';
import AwesomeButton from "../components/AwesomeButton/AwesomeButton";
import { BlogTop, BlogSection } from '../styles/blogStyles';

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
        top:250,
        behavior: 'smooth'
      });
    } 
  }, [posts]);

    return(<>
      <BlogTop bgimg="https://ik.imagekit.io/zkvrzayer06/tr:f-auto,q-50/corinne-kutz-tMI2_-r5Nfo-unsplash_7nJDMdJhw.jpg">
      <div>
        <h1>Ontime Blog</h1>
        </div>
    </BlogTop>
    <BlogSection id="blogPage">
        <Container fixed>
        <BlogCon page="blog" posts={posts}/>
        {per_page<totalProducts ? <div id="loadMore"><AwesomeButton loading={loading} text="Load More" onClick={loadMore}/></div>
        : 
        <div id="loadMore"><div>No More Posts. Thats all for now :)</div></div>}
        </Container>
        </BlogSection>
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