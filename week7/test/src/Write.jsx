import React from 'react';
import { useState } from "react";

function Write() {
    const [title, setTitle] = useState(``);
    const [content, setContent] = useState(``);

    const Print =() =>{
        if(title === ``|| content === ``){
            alert("내용을 채워주세요")
        }
        else{
            console.log({title}, {content})
        }
    }

    return (
        <div className='write'>
            <div className='wrap'>
                <input className='title' placeholder='제목을 입력하세요'
                value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                <input className='article' placeholder='내용을 입력하세요'
                value={content} onChange={(e) => {setContent(e.target.value)}}></input>
                <div className='btn'>
                    <button className='c'>취소하기</button>
                    <button className='w'
                    onClick={()=>Print()}>작성하기</button>
                </div>


            </div>

        </div>
    );
}

export default Write;