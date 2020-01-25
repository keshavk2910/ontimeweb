import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header'));
const Meta = dynamic(() => import('./Meta'));
const Footer = dynamic(() => import('./Footer/Footer'));

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
    </div>
    );
}
export default Layout;