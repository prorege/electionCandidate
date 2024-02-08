import Card from "./Card.jsx"
import {Link} from 'react-router-dom'

function CardBlock() {
    return (
        <div className="card-container">
        <Link to={'/body/seoul'}>
            <Card region="서울" number="52명"/>
        </Link>
        <Link to={'/body/gyunggi'}>
            <Card region="경기" number="52명"/>
        </Link>
        <Link to={'/body/gangwon'}>
            <Card region="강원" number="52명"/>
        </Link>
        <Link to={'/body/choong'}>
            <Card region="충청" number="52명"/>
        </Link>
        <Link to={'/body/jeonra'}>
            <Card region="전라" number="52명"/>
        </Link>
        <Link to={'/body/gyungsang'}>
            <Card region="경상" number="52명"/>
        </Link>
        <Link to={'/body/jeju'}>
            <Card region="제주" number="52명"/>
        </Link>
        <Link to={'/body/gwangju'}>
            <Card region="광주" number="52명"/>
        </Link>

        </div>
    )
}

export default CardBlock