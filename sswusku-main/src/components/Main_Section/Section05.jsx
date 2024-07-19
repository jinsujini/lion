import React from 'react'
import Img01 from '../../assets/img/section04_1.png'
import Img02 from '../../assets/img/section04_2.png'
import Img03 from '../../assets/img/section04_3.png'
import Img04 from '../../assets/img/section04_4.png'

const Section05 = () => {
    return (
        <div className='Section05_wrap'>
            {/* 헤더 섹션: Figma 레이아웃을 참고하여 제목을 <h3>과 <h1> 태그로 작성하세요. */}
            <div className="header">
                <h3>LIKELION MEDIA</h3>
                <h1>언론 속의 LIKELION</h1>
                {/* LIKELION MEDIA를 작성하세요. */}
                {/* 언론 속의 LIKELION를 작성하세요. */}
            </div>

            <div className="main">
                {/* 각 뉴스 항목을 <div> 태그로 감싸고, 내부에 <img>와 텍스트 블록을 포함하세요. */}

                    <div>
                <img src={Img01} alt="Img01" />
                {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}

                <div>
                    <h3>P2E ‘실타래‘, 편의성 강화해 진입
                        장벽 낮춘다</h3>
                    {/*뉴스 제목을 작성하세요. */}
                    <p className='text'>멋쟁이사자처럼은 메타콩즈뿐 아니라 여러 갈래의 대체불가토큰(NFT) 사업을 펼쳤다. 멋쟁이사자처럼 산하 블록...</p>
                    {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}
                    <p className='info'>
                        더별 | 2023.01.27
                    </p>
                    {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                </div>
            </div>
            <div>
                <img src={Img02} alt="Img02" />
                {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}

                <div>
                    <h3>콘크릿, 글로벌 아티스트 톰 삭스와
                        이태원 전역에서 보물찾기 진행</h3>
                    {/*뉴스 제목을 작성하세요. */}
                    <p className='text'>현대카드와 멋쟁이사자처럼의 합작법인 모던라이언이 운영하는 NFT 마켓플레이스 ‘KONKRIT(이하 콘크릿)’이...</p>
                    {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}
                    <p className='info'>
                        경향게임스 | 2023.09.13
                    </p>
                    {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                </div>
            </div>
            <div>
                <img src={Img03} alt="Img03" />
                {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}

                <div>
                    <h3>
                        멋쟁이사자처럼, 아트 NFT·실물
                        연계 ‘쿼드해시‘ 프로젝트 띄운다</h3>
                    {/*뉴스 제목을 작성하세요. */}
                    <p className='text'>멋쟁이사자처럼이 아트NFT와 실물을 연계한 대체불가토큰(NFT) 프로젝트 쿼드해시를 추진한다.</p>
                    {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}
                    <p className='info'>
                        디지털투데이 | 2023.09.27
                    </p>
                    {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                </div>
            </div>
            <div>
                <img src={Img04} alt="Img04" />
                {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}

                <div>
                    <h3>“비즈니스 문제 해커톤으로 해
                        결”…멋쟁이사자처럼, 기업 해커톤
                        출시</h3>
                    {/*뉴스 제목을 작성하세요. */}
                    <p className='text'>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
                    {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}
                    <p className='info'>
                        머니S | 2023.10.31
                    </p>
                    {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                </div>
            </div>
                {/* 다음 세 뉴스 항목에 대해서도 동일한 구조를 반복하세요. */}
            </div>
           
            {/* 다음 세 뉴스 항목에 대해서도 동일한 구조를 반복하세요. */}
        </div>


    )
}

export default Section05
