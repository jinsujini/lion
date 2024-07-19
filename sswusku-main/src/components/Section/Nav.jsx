import React from 'react'
import Logo from '../../assets/img/likelion_w_logo.svg'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <img src={Logo} alt="로고" />
            <ul>
                <li>브랜드 스토리</li>
                <li>서비스 소개</li>
                <li>미디어</li>
                 <li>채용</li>
            </ul>
            {/* <img> 태그를 사용하여 로고 이미지를 화면에 표시하세요. */}
            
            {/* <ul> 태그 내부에 <li> 태그를 사용하여 메뉴 항목을 만드세요. 메뉴 항목은 '브랜드 스토리', '서비스 소개', '미디어', '채용'입니다. */}
            
        </div>
    )
}

export default Nav
