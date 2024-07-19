import React from 'react'
import Main from '../components/section/Main'

import { home } from '../data/home'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Main 
    title = "HOME"
    description="Sujin's 추천 playlist 미리보기">
    
    <section id='todayPage'>
        <h2>🎧Sujin's 추천 PLAYLIST 미리보기</h2>

        {home.map((today, key) => (
            <div className='today__inner' key={key}>
                <div className='today__thumb play__icon'>
                    <Link to={today.page}>
                        <img src={today.img} alt={today.title} />
                    </Link>
                </div>
                <div className='today__text'>
                    <h1> -</h1>
                    <h3 className='title'>
                        <Link to={today.page}>{today.title}</Link>
                    </h3>
                    <p className='desc'>{today.desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                        </span>
                        <span className='date'>{today.date}</span>
                    </div>
                </div>
            </div>
        ))}
    </section>
</Main>


  )
}

export default Home
