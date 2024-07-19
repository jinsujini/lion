import React from 'react'
import Img01_img from '../../assets/img/section_1.png'
import Img02_img from '../../assets/img/section_2.png'
import Img03_img from '../../assets/img/section_3.png'
import Img04_img from '../../assets/img/section_4.png'

const Section01 = () => {

    return (
        <div className='Section01_wrap'>
            <div className="Section01">
                {/* "POSSIBILITY" 섹션, "TO","REALITY" 섹션을 Figma 레이아웃을 참고하여 텍스트를 작성하고,
                각각 알맞는 섹션에 'Img01_img',Img02_img',Img03_img' ,Img04_img' 를 "클래스"로 추가하세요.*/}
                <div>
                    <p>POSSIBILITY</p>
                    <img src={Img01_img} className='Img01_img' />
                </div>
                <div>
                    <img src={Img02_img} className='Img02_img' />
                    <p>TO</p>
                    <img src={Img03_img} className='Img03_img' />

                </div>
                <div>
                    <p>REALITY</p>
                    <img src={Img04_img} className='Img04_img' />

                </div>
            </div>
        </div>
    )
}

export default Section01