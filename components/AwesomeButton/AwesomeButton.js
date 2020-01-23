import './button.scss';
import Link from 'next/link';

const AwesomeButton = ({href, text, onClick, loading}) => {
    return (<>
        <div className={loading ? "awesomeButton_div loading" : "awesomeButton_div"}>
    <div className="button_inner q">
    {href && onClick ? <Link href={href}>
    <a>
      <button className="awesomeButton" onClick={onClick}>{text}</button>
    </a>
    </Link> : onClick ?
    <button className="awesomeButton" onClick={onClick}>{text}</button>
    : href ?
    <Link href={href}><a>
    <button className="awesomeButton">{text}</button>
    </a></Link>
    :
    <button className="awesomeButton">{text}</button>
    }
  <div className='b_l_quad'>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
        <div className='button_spots'></div>
      </div>
      </div>
    </div>
    </>);
}
export default AwesomeButton;