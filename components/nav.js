import { slide as Menu } from 'react-burger-menu'
import ActiveLink from './ActiveLink/ActiveLink';
import {withRouter} from 'next/router';
import './nav.css';

const NAV = ({router}) => {
  const items = [
    {id:1, link:'/', label:'Home'},
    {id:2, link:'/work', label:'Work'},
    {id:4, link:'/about', label:'About'},
    {id:5, link:'/contact', label:'Contact'},
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
    </div>
    );
}

export default withRouter(NAV);