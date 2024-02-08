import {Link} from 'react-router-dom'

function Face(){

    return (
        <>
        <div className='main'>
        <Link to={'/body'}><h1 className='main-text'>2024<br/> 총선 후보 <br />보러가기</h1></Link>

        </div>

        </>
        
    );
}

export default Face