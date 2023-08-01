import Image from 'next/image'
import Container from '../src/components/container/container'
import style from '../styles/index.module.css'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import styleButton from '../src/components/button/button.module.css'
import Header from '../src/components/header/header'
import Link from 'next/link'
import imageMen from '../public/homemMexendoCelular.png'
import styleInput from '../src/components/input/input.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <Header
        title="Jogo da Memória"
        styleTitle={style.title}
        style={style.header}
        ><Link className={style.link} href="/article">Saiba Mais</Link></Header>      

      <div className={style.background}>
        <div>
          <Image src={imageMen} className={style.image}/>
        </div>
        <div className={style.card}>
          <Input type="text" className={styleInput.inputDefault} placeholder="Digite seu nome"></Input>
          <Button style={styleButton.buttonPrimary} type="submit">Jogar</Button>
        </div>
      </div>
    </div>
  )
}
