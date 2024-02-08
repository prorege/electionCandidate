import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className="header">
            <div className="header-main-text">
                <Link to="/body" className='link-no-underline'><h2 className='BlackColor'>2024 총선</h2></Link>
            </div>
            <div className="header-other-text inline-block">
                <div className="text inline-block header-small-text">
                    <Link to="/body/seoul" className='link-no-underline'>서울</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/gyunggi" className='link-no-underline'>경기</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/gangwon" className='link-no-underline'>강원</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/choong" className='link-no-underline'>충청</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/jeonra" className='link-no-underline'>전라</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/gyungsang" className='link-no-underline'>경상</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/jeju" className='link-no-underline'>제주</Link>
                </div>
                <div className="text inline-block header-small-text">
                    <Link to="/body/gwangju" className='link-no-underline'>광주</Link>
                </div>
            </div>
            
        </header>
    );
}

export default Header