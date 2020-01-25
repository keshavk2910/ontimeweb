import { slide as Menu } from 'react-burger-menu'
import ActiveLink from './ActiveLink/ActiveLink';
import {withRouter} from 'next/router';

const NAV = ({router}) => {
  const items = [
    {id:1, link:'/', label:'Home'},
    {id:2, link:'/work', label:'Work'},
    {id:4, link:'/about', label:'About'},
    {id:5, link:'/blog', label:'Blog'},
    {id:6, link:'/contact', label:'Contact'},
  ]

const handleLog = () => {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('token');
  localStorage.removeItem('niceName');
  router.push(`/login`,`/login`);
}
    return (
    <div className="main-nav">
    <ul className="menu-ul desktop-show">
      {
        items.map(item => 
        <ActiveLink key={item.id} activeClassName="nav-active" href={item.link}>
        <a><li>
        <span>{item.label}</span>
        </li></a>
        </ActiveLink>)
      }
      </ul>

    <div className="mobile-show">
    <Menu right pageWrapId={ "main-wrap" } outerContainerId={ "outer-wrap" } width={ '50%' } >
    {
      items.map(item => 
      <ActiveLink key={item.id} activeClassName="nav-active" href={item.link}>
      <a className="menu-item">
      <span>{item.label}</span>
      </a>
      </ActiveLink>)
    }
      </Menu>
    </div>
  <style jsx>{`
  .bm-burger-button{position:fixed;width:35px;height:25px;right:36px;top:36px}.bm-burger-bars{background:#fff;height:15%!important}.bm-menu{background:#fff;padding:2.5em 10px 0;font-size:1.15em}.bm-menu a{width:100%;display:block;font-size:18px;font-weight:700;text-transform:uppercase;text-decoration:none;font-family:Roboto,Arial,Helvetica!important;color:#000}.bm-menu a:focus,.bm-menu a:hover{color:#f1592a}.bm-item-list a{padding:.8em}.bm-item:focus{outline:0}.bm-cross{background:#f1592a;width:5px!important;height:22px!important}.mobile-show{display:none}@media (max-width:960px){a.nav-active span{background:-webkit-linear-gradient(354deg,#0d72b9 35%,#fb8a04 56%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;border-bottom:2px solid #000}.mobile-show{display:block}.desktop-show{display:none}}.bm-cross-button button{padding:15px!important;left:-4px!important;top:-1px!important}#main-wrap{min-height:100vh}.bm-burger-button{position:absolute!important}span.formtext{color:#fff!important}.logout-link{cursor:pointer}.logout-link:hover{color:#f7941e!important}ul.desktop-show{list-style:none;height:90px;line-height:73px;-webkit-transition:all .25s;-moz-transition:all .25s;-o-transition:all .25s;transition:all .25s}ul.desktop-show li{display:inline-block;padding:10px 20px;font-size:20px;font-weight:600;font-family:Roboto,Arial,Helvetica!important;color:#fff;-webkit-transition:all .25s;-moz-transition:all .25s;-o-transition:all .25s;transition:all .25s}ul.desktop-show a li span{transition:border-bottom .2s}ul.desktop-show a:hover li span{border-bottom:2px solid #fff}ul.desktop-show a.nav-active li span{color:#fff;border-bottom:2px solid #fff}ul.desktop-show a.nav-active li{transform:scale(1.1)}header.header_sticky ul.desktop-show a.nav-active li span{color:#000;border-bottom:2px solid #000}header.header_sticky ul.desktop-show a:hover li span{border-bottom:2px solid #000}header.header_sticky ul.desktop-show li{color:#000;padding:5px 20px}header.header_sticky{-webkit-box-shadow:0 3px 5px rgba(57,63,72,.3);-moz-box-shadow:0 3px 5px rgba(57,63,72,.3);box-shadow:0 3px 5px rgba(57,63,72,.3)}header.header_sticky .main-logo{margin:10px}header.header_sticky ul.desktop-show{height:80px}`}</style>
    </div>
    );
}

export default withRouter(NAV);