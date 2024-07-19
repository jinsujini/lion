import React from 'react'
import Logo from '../../assets/img/likelion_logo.svg'
import Instar from '../../assets/img/instar.svg'
import Youtube from '../../assets/img/youtube.svg'
import Branch from '../../assets/img/branch.svg'
import Download from '../../assets/img/download.svg'
import Share from '../../assets/img/share.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="left">
                <img src={Logo} alt="Logo" />
                {/* Figma 레이아웃을 참고하여 회사 정보를 알맞은 태그를 사용하여 작성하세요. */}
                <p>(주)멋쟁이사자처럼 | 대표이사 나성영<br />
                    서울특별시 종로구 종로3길 17 D타워, 16-17층<br />
                    사업자 번호 : 264-88-01106<br />
                    통신판매업 신고번호 : 2022-서울종로-1534<br />
                    문의처 contact@likelion.net</p>
                <div>
                    <div>
                        <img src={Instar} alt="Instar" className="instar" />
                    </div>
                    <div>
                        <img src={Youtube} alt="Youtube" className="youtube" />
                    </div>
                    <div>
                        <img src={Branch} alt="Branch" className="branch" />
                    </div>
                </div>
            </div>
            {/* Figma 레이아웃 - FOOTER의 오른쪽 부분입니다.*/}
            <div className="right">
                {/* Figma 레이아웃을 참고하여 'FAMILY BRAND' 섹션을 아래와 같이 알맞은 태그들을 사용하여 작성하세요. */}
                <div className="family">
                    <h3>FAMILY BRAND</h3>
                    <p>TECHIT</p>
                    <p>SYLTARE</p>
                    <p>MODERN LION</p>
                    <p>QUADHASH</p>

                </div>
                {/* Figma 레이아웃을 참고하여 'POLICY' 섹션을 작성하세요.*/}
                <div className="policy">
                    <h3>POLICY</h3>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>

                    <div>
                        <p>Nonprofit Report</p>
                        {/* Figma 레이아웃을 참고 /<img> 태그를 사용하여 '다운로드' 이미지를 화면에 표시하세요*/}
                        <img src={Download} alt="다운로드" />
                    </div>
                    <div>
                        <p>국민권익위원회</p>
                        <img src={Share} alt="쉐어" />
                    </div>
                </div>
                {/* Figma 레이아웃을 참고하여 'RESOURCE' 섹션을 작성하세요.*/}
                <div className="resource">
                    <h3>RESOURCE</h3>
                    <div>
                        <p>로고 가이드라인</p>
                        <img src={Download} alt="다운로드" />
                        {/* Figma 레이아웃을 참고 /<img> 태그를 사용하여 '다운로드' 이미지를 화면에 표시하세요*/}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
