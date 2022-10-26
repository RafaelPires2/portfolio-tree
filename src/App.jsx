import global from './global.module.css'
import { User } from './components/perfil/User'
import { Post } from './components/posts/Post'

export function App() {

  return (
    <>
    <div className={global.wrapper}>
    <User /> 
    <Post titulo="Ebook: Ciclo da Riqueza" link="https://www.missaocactus.com.br"/>
    <Post titulo="Youtube" link="https://www.missaocactus.com.br"/>
    <Post titulo="Instagram" link="https://www.missaocactus.com.br"/>
    <Post titulo="TikTok" link="https://www.missaocactus.com.br"/>
    <Post titulo="Grupo Exclusivo Telegram" link="https://www.missaocactus.com.br"/>
    </div>
    </>
  )
}

