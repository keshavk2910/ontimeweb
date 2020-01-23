import Header from "./header"
import Meta from './Meta';
import Footer from './Footer/Footer';
const Layout = (props) => {
    return (
    <div id="outer-wrap">
    <Meta/>
    <Header/>
    <div id="main-wrap">
    {props.children}
    </div>
    <Footer/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"/>
    <link rel="preload" href="https://ik.imagekit.io/zkvrzayer06/tr:w-200,f-auto/logo_eLCgigxsk.png" as="image"/>
    </div>
    );
}
export default Layout;