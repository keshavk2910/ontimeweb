import Link from 'next/link';
import ActualLogo from './ActualLogo'
const Logo = () => {
    return <div className="logo-bg"><div className="main-logo">
    <Link href='/'><a><ActualLogo/></a></Link>
    </div>
    <div className="turn"></div>
    <div className="turn2"></div>
    <style jsx>{`
    .turn {
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        left: -11px;
        padding: 57px 12px;
        transform: rotate(-10deg);
        border-bottom-left-radius: 8px;
    }
    .turn2 {
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        right: -11px;
        padding: 57px 12px;
        transform: rotate(10deg);
        border-bottom-right-radius: 8px;
    }
    .logo-bg {
        position:relative;
        background-color: #fff;
        padding: 10px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

    }
    .main-logo {
      margin:10px;
      -webkit-transition: all 0.25s;
    -moz-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;
    }
    img{
        max-width: 100%;
        display: block; /* remove extra space below image */
    }
    @media (max-width: 968px) {
        .turn, .turn {
            display:none;
        }
    }
    `}</style>
    </div>
}
export default Logo;