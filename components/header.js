import React, { Component } from 'react';
import Logo from './Logo';
import NAV from './Nav';
import Container from '@material-ui/core/Container';

class Header extends Component {
  state = {
    sticky:false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if(window.scrollY > 250){
      this.setState({ sticky: true });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if(window.scrollY > 250){
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };


render(){
    return <header className={this.state.sticky ? "header_sticky" : ""}>
    <Container fixed>
    <Logo sticky={this.state.sticky}/>
    <NAV/>
    </Container>    
    <style jsx>{`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display:flex;
      z-index: 9999999;
    }
    @media (max-width: 968px) {
      header {
        position:relative;
      }
    }
    header.header_sticky {
      -webkit-animation: fadein 1s; 
   -moz-animation: fadein 0.4s;
    -ms-animation: fadein 0.4s;
     -o-animation: fadein 0.4s;
        animation: fadein 0.4s;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: ${this.state.sticky ? "#ffffff":""};
    }
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    
    /* Firefox < 16 */
    @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    
    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    
    /* Internet Explorer */
    @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    
    /* Opera < 12.1 */
    @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    `}</style>
    </header>
}
}

export default Header;