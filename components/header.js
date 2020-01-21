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
      -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.3s;
    }
    header.header_sticky {
      background: ${this.state.sticky ? "#fff":""};
    }
    `}</style>
    </header>
}
}

export default Header;