import global from './global.module.css'
import { User } from './components/perfil/User'
import { Post } from './components/posts/Post'

import React from 'react'

export function App() {

  return (
    <>
    <div className={global.container}>
    <div className={global.wrapper}>
    <User /> 
    <Post titulo="Ebook: Ciclo da Riqueza" link="https://hotm.art/YZfLgzn"/>
    <Post titulo="Youtube" link="https://www.youtube.com/channel/UCz1aiyLv8ndOrfpQi5qwoJw"/>
    <Post titulo="Instagram" link="https://www.instagram.com/rafaelbrpires/"/>
    <Post titulo="TikTok" link="https://www.tiktok.com/@rafaelbrpires2?is_from_webapp=1&sender_device=pc"/>
    <Post titulo="Grupo Exclusivo Telegram" link="https://t.me/+0R2wfTXcdy4yM2Ix"/>
    </div>
    </div>
    </>
  )
}

