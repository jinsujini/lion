import React, { useState } from 'react'
import Article from './Article';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(``);
  const [content, setContent] = useState(``);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1)
  }

  return (

    <>
      {open ? (
        <Article title={title} content={content} />
      ) : (
        <div className='write_wrap'>
          <input value={title} onChange={(e) => { setTitle(e.target.value) }} className='title' type="text" placeholder='제목을 입력해주세요!' />
          <textarea value={content} onChange={(e) => { setContent(e.target.value) }} className='content' placeholder='내용을 입력해주세요!' />
          <div>
            <button onClick={() => { handleClick() }} className='delete'>취소하기</button>
            <button className='write' onClick={() => { setOpen(true) }}>작성하기</button>
          </div>
        </div>
      )}
    </>


  )
}

export default Write
